import { dbConnect } from "@/lib/dbConnect";
import WaitlistEmail from "@/model/WaitlistEmail";
import { sendWaitlistEmail } from "@/helpers/sendEmail";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  username: z.string(),
  fullname: z.string().optional(), 
});


const ipRequestMap = new Map<string, number[]>();
const RATE_LIMIT = 5; 

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60_000;

  const requests = ipRequestMap.get(ip) || [];
  const recent = requests.filter((t) => t > windowStart);
  recent.push(now);
  ipRequestMap.set(ip, recent);

  return recent.length > RATE_LIMIT;
}

export async function POST(req: Request) {
  await dbConnect();

  const ip = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";

  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { email, username, fullname } = schema.parse(body);

    if (fullname && fullname.trim() !== "") {
      return Response.json({ error: "Bot detected" }, { status: 400 });
    }

    const alreadyExists = await WaitlistEmail.findOne({ email });

    if (alreadyExists) {
      console.log("Email already in waitlist");

      const lastSent = alreadyExists.lastSentAt || 0;
      const now = Date.now();

      const FIVE_MIN = 5 * 60 * 1000;
      if (now - new Date(lastSent).getTime() > FIVE_MIN) {
        await sendWaitlistEmail(email, username);
        await WaitlistEmail.updateOne({ email }, { lastSentAt: new Date() });
      }

      return Response.json({ message: "You're already in the waitlist." }, { status: 200 });
    }

    await WaitlistEmail.create({
      email,
      username,
      lastSentAt: new Date(),
    });

    await sendWaitlistEmail(email, username);

    return Response.json({ message: "You've joined the waitlist!" }, { status: 201 });
  } catch (err: any) {
    console.error("Waitlist error:", err.message);
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  

}
