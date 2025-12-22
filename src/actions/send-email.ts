"use server";

import { SendMailOptions } from "nodemailer";
import { z } from "zod";
import {
  formatZodErrors,
  RecaptchaToken,
  type ActionResponse,
} from "~/actions/utils";
import { sendEmailViaTransporter } from "~/lib/nodemailer";
import { verifyRecaptcha } from "~/lib/recaptcha";

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
    await verifyRecaptcha(formData.recaptchaToken);

    const data = emailSchema.parse(formData);

    const mailOptions: SendMailOptions = {
      to: process.env.EMAIL_USER,
      subject: `New contact from your portfolio !`,
      html: `
      <p>From: ${data.source}</p>
      <p>Subject: ${data.subject}</p>
      <p>----------------Message----------------</p>
      <p>${data.body}</p>
      `,
    };
    await sendEmailViaTransporter(mailOptions);

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
