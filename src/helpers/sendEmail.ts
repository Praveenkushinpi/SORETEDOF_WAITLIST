import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWaitlistEmail = async (to: string, username: string) => {
    try{
        const {data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || "onboarding@resend.dev",
            to,
            subject: "You're on the Waitlist!",
            html: ` 
    <div style="background-color: #0a0a0a; color: #fff; font-family: Arial, sans-serif; padding: 40px; text-align: center;">
      <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/e1c7478f0ecfbdc623bcb96dc8cf622ce25ea15b_screenshot_2025-06-18_114913.png" alt="SORTEDOF Logo" style="width: 100px; margin-bottom: 20px;" />
      <h1 style="font-size: 28px; margin-bottom: 10px;">You're on the Waitlist</h1>
      <p style="font-size: 16px; color: #ccc; margin-bottom: 30px;">
        Be the first to try <strong>SORTEDOF</strong> — your one-hand solution for everyday notes.
      </p>
      <div style="text-align: left; max-width: 600px; margin: auto;">
        <p style="font-size: 16px; margin-bottom: 10px;">Hi <strong>${username}</strong>,</p>
        <p style="font-size: 16px; margin-bottom: 10px;">
          Thanks for joining our waitlist. You'll be among the first to get access when we launch our beta.
        </p>
        <p style="font-size: 16px; margin-bottom: 10px;">
          We'll notify you as soon as spots become available.
        </p>
        <p style="font-size: 16px; margin-top: 30px;">Thanks for your interest,</p>
        <p style="font-size: 16px;"><strong>The SORTEDOF Team</strong></p>
      </div>
    </div>
  `
        });
    if (error) {
        console.error("Resend Error: ", error );
    }   else {
        console.log("Email Sent:", data );
    }
        return {data, error };
} catch (err) {
    console.error("Unexpected Error:", err);
    return { error: err };
}



};