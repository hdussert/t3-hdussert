"use server";

import { z } from "zod";
import {
  formatZodErrors,
  RecaptchaToken,
  type ActionResponse,
} from "~/actions/utils";
import { env } from "~/env";
import { resend } from "~/lib/resend";
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

    const { error } = await resend.emails.send({
      from: "Portfolio <portfolio@hdussert.com>",
      to: [env.EMAIL_USER],
      replyTo: data.source,
      subject: `New contact from your portfolio: ${data.subject}`,
      text: `From: ${data.source}\nSubject: ${data.subject}\n\n${data.body}`,
    });
    // Resend returns errors instead of throwing
    if (error) throw new Error(error.message);

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
    console.error("sendEmail failed:", error);
    return {
      success: false,
      message: "An error occurred while sending the email",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
