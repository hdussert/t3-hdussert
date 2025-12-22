import z from "zod";

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
};

export const formatZodErrors = (error: z.ZodError) => {
  return z.flattenError(error).fieldErrors;
};

export type RecaptchaToken = { recaptchaToken: string };
