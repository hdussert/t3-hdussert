import { unstable_noStore as noStore } from "next/cache";
import Phone from "./_components/phone";
import { CardLink } from "./_components/card-link";
import { cn } from "~/styles/helpers";

export default async function Home() {
  noStore();

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.leftWrapper}>
        <h1 className={styles.title}>Hugo Dussert</h1>
        <div className={styles.cardsWrapper}>
          <CardLink
            href="https://create.t3.gg/en/usage/first-steps"
            title="Mon blog"
            description="Just the basics - Everything you need to know to set up your database and authentication."
          />
          <CardLink
            href="https://create.t3.gg/en/introduction"
            title="Me contacter"
            description="Learn more about Create T3 App, the libraries it uses, and how to deploy it."
          />
        </div>
      </div>
      <div>
        <Phone />
      </div>
    </main>
  );
}

const styles = {
  mainWrapper: cn(
    "flex min-h-screen items-stretch justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white",
  ),
  leftWrapper: cn(
    "container flex flex-col items-center justify-around gap-12 px-4 py-16 ",
  ),
  title: cn("text-5xl font-extrabold tracking-tight sm:text-[5rem]"),
  cardsWrapper: cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"),
};
