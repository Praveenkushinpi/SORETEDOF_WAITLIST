import { dbConnect } from "@/lib/dbConnect";
import WaitlistEmail from "@/model/WaitlistEmail";
import { sendWaitlistEmail } from "@/helpers/sendEmail";
import { z } from "zod";

const schema = z.object({
  email: z.string().email().max(254),
  username: z.string().min(1).max(50).regex(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, underscores, and hyphens"),
  fullname: z.string().optional(), 
});

const ipRequestMap = new Map<string, number[]>();
const RATE_LIMIT = 5; 
const WINDOW_MS = 60_000; 
const MAX_IP_ENTRIES = 10000; 


function cleanupOldEntries(): void {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  
  for (const [ip, requests] of ipRequestMap.entries()) {
    const recent = requests.filter((t) => t > windowStart);
    if (recent.length === 0) {
      ipRequestMap.delete(ip);
    } else {
      ipRequestMap.set(ip, recent);
    }
  }

  if (ipRequestMap.size > MAX_IP_ENTRIES) {
    const entries = Array.from(ipRequestMap.entries());

    const toKeep = entries.slice(-Math.floor(MAX_IP_ENTRIES / 2));
    ipRequestMap.clear();
    toKeep.forEach(([ip, requests]) => ipRequestMap.set(ip, requests));
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const requests = ipRequestMap.get(ip) || [];
  const recent = requests.filter((t) => t > windowStart);
  recent.push(now);
  ipRequestMap.set(ip, recent);

  if (Math.random() < 0.01) {
    cleanupOldEntries();
  }

  return recent.length > RATE_LIMIT;
}

export async function POST(req: Request) {
  try {
    await dbConnect();


    const forwardedFor = req.headers.get("x-forwarded-for");
    const cfConnectingIp = req.headers.get("cf-connecting-ip");
    const xRealIp = req.headers.get("x-real-ip");
    
    let ip = "unknown";
    if (forwardedFor) {
      ip = forwardedFor.split(',')[0].trim();
    } else if (cfConnectingIp) {
      ip = cfConnectingIp.trim();
    } else if (xRealIp) {
      ip = xRealIp.trim();
    }

    ip = ip.replace(/[^0-9a-fA-F:.]/g, '').substring(0, 45); 

    if (isRateLimited(ip)) {
      return Response.json({ 
        error: "Too many requests. Please try again later.",
        retryAfter: 60
      }, { 
        status: 429,
        headers: {
          'Retry-After': '60'
        }
      });
    }

    let body;
    try {
      body = await req.json();
    } catch (parseError) {
       console.error("JSON parse error:", parseError);
      return Response.json({ error: "Invalid JSON format" }, { status: 400 });
    }


    let validatedData;
    try {
      validatedData = schema.parse(body);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const errors = validationError.errors.map(err => `${err.path.join('.')}: ${err.message}`);
        return Response.json({ 
          error: "Validation failed",
          details: errors
        }, { status: 400 });
      }
      throw validationError;
    }

    const { email, username, fullname } = validatedData;


    if (fullname && fullname.trim() !== "") {
      console.warn(`Potential bot attempt from IP: ${ip}, email: ${email}`);
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const alreadyExists = await WaitlistEmail.findOne({ email: normalizedEmail });

    if (alreadyExists) {
      console.log("Email already in waitlist:", normalizedEmail);
      return Response.json({ message: "You're already in the waitlist." }, { status: 200 });
    }

    await WaitlistEmail.create({
      email: normalizedEmail,
      username: username.trim(),
      lastSentAt: new Date(),
    });

      try {
      await sendWaitlistEmail(normalizedEmail, username);
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
    }

    return Response.json({ message: "You've joined the waitlist!" }, { status: 201 });
    
   } catch (err: unknown) {
  const error = err as { code?: number; name?: string }; 
  console.error("Waitlist error:", error);
  if (error?.name === "ValidationError" || error?.name === "CastError") {
    return Response.json({ error: "Invalid request data" }, { status: 400 });
  }

  if (error?.code === 11000) {
    return Response.json({ message: "You're already in the waitlist." }, { status: 200 });
  }

  if (error?.name === "MongooseError" || error?.name === "MongoError") {
    return Response.json({ error: "Service temporarily unavailable" }, { status: 503 });
  }

  return Response.json({ error: "Internal server error" }, { status: 500 });
}
}

function methodNotAllowed() {
  return Response.json(
    { error: "Method Not Allowed" },
    { status: 405, headers: { Allow: "POST" } },
  );
}

export const GET    = methodNotAllowed;
export const PUT    = methodNotAllowed;
export const DELETE = methodNotAllowed;
export const PATCH  = methodNotAllowed;