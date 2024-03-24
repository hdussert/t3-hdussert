import { unstable_noStore as noStore } from "next/cache";
import { Hero } from "~/components/hero";
import { Resume } from "~/components/resume";

export default function Home() {
  noStore();

  return (
    <main>
      <Hero />
      <Resume />
    </main>
  );
}
