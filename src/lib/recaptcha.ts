import "server-only";

async function verifyRecaptcha(token: string): Promise<void> {
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: token,
      }),
    },
  );

  const recaptchaResult = await recaptchaResponse.json();
  if (!recaptchaResult.success || recaptchaResult.score <= 0.5) {
    throw new Error("ReCAPTCHA verification failed");
  }
}

export { verifyRecaptcha };
