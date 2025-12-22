import { createTransport, SendMailOptions } from "nodemailer";
import "server-only";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

async function sendEmailViaTransporter(mailOptions: SendMailOptions) {
  return transporter.sendMail(mailOptions);
}

export { sendEmailViaTransporter };
