"use client";

import { unstable_noStore as noStore } from "next/cache";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import { Projects } from "~/components/project";
import Resume from "~/components/Resume";

export default function Home() {
  noStore();

  return (
    <main className="flex flex-col items-center">
      <Hero />
      {/* <WhoAmI /> */}
      <Projects />
      <Resume />
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      >
        <Contact />
      </GoogleReCaptchaProvider>
    </main>
  );
}
