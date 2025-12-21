"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { formatZodErrors, type ActionResponse } from "~/actions/utils";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const emailSchema = z.object({
  source: z.email(),
  subject: z.string().min(1),
  body: z.string().min(1),
});

export type EmailData = z.infer<typeof emailSchema>;

export async function sendEmail(formData: EmailData): Promise<ActionResponse> {
  try {
    const validationResult = emailSchema.safeParse(formData);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: formatZodErrors(validationResult.error),
      };
    }

    const data = validationResult.data;

    const mailOptions = {
      to: process.env.EMAIL_USER,
      subject: `CONTACT: ${data.source}`,
      html: `
      <h1>${data.subject}</h1>
      <p>${data.body}</p>
      `,
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Resend response:", response);
    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.log("Error sending email:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation errors occurred",
        errors: formatZodErrors(error),
      };
    }
    return {
      success: false,
      message: "An error occurred while sending the email",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
