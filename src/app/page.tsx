"use client";

import { unstable_noStore as noStore } from "next/cache";
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
      {/* <Contact /> */}
    </main>
  );
}
