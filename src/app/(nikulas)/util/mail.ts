"use server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vicnet.video@gmail.com",
    pass: process.env.SMTP_PASS,
  },
});
export async function sendMail(name: string, email: string, message: string) {
  const res = await transport.sendMail({
    from: "vicnet.video@gmail.com",
    to: process.env.SMTP_TARGET,
    replyTo: process.env.SMTP_TARGET,
    subject: `Contact from ${name}`,
    html: `
		<p>Name: ${name}</p>
		<p>Email: ${email}</p>
		<p>Message: ${message}</p>
		`,
  });

  if (res.accepted.length === 0) return false;
  return true;
}
