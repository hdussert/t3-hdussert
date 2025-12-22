import { ArrowDownCircle } from "lucide-react";
import Section from "~/components/Section";

const Hero = () => {
  return (
    <Section className="relative flex h-screen w-full flex-col items-center justify-center gap-16 sm:flex-row sm:gap-24">
      <div className="flex flex-col items-end text-right sm:flex-1">
        <div>
          <h1 className="font-display mb-2 border-b-4 pb-4 text-5xl sm:text-6xl">
            DUSSERT <br />
            Hugo
          </h1>
          <p className="text-muted-foreground text-lg uppercase sm:text-xl">
            Développeur
            <br />
            Web & Mobile
          </p>
        </div>
      </div>
      <div className="text-muted-foreground text-center sm:flex-1">
        <p className="text-balance italic sm:max-w-96">
          “In programming, the hard part isn&apos;t solving problems but
          deciding what problems to solve.”
        </p>
        <p>- Paul Graham</p>
      </div>

      <a
        href="#projects"
        target="_self"
        className="absolute bottom-10 animate-pulse transition-all hover:scale-110 hover:animate-none"
      >
        <ArrowDownCircle className="h-10 w-10 stroke-1" />
      </a>
    </Section>
  );
};

export default Hero;
