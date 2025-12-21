"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import {
  formatZodErrors,
  RecaptchaToken,
  type ActionResponse,
} from "~/actions/utils";

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

export type SendEmailFormData = EmailData & RecaptchaToken;

export async function sendEmail(
  formData: SendEmailFormData,
): Promise<ActionResponse> {
  try {
    // Verify ReCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY!,
          response: formData.recaptchaToken,
        }),
      },
    );
    const recaptchaResult = await recaptchaResponse.json();
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return {
        success: false,
        message: "ReCAPTCHA verification failed",
      };
    }

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
      subject: `New contact from your portfolio !`,
      html: `
      <p>From: ${data.source}</p>
      <p>Subject: ${data.subject}</p>
      <p>----------------Message----------------</p>
      <p>${data.body}</p>
      `,
    };

    const response = await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
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
