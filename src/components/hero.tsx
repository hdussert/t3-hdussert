"use client";

import dynamic from "next/dynamic";
import { Button } from "~/components/ui/button";

const PhoneScene = dynamic(() => import("./three/scenes/phone-scene"), {
  ssr: false,
});

export const Hero = () => {
  const scrollToExperiences = () => {
    const resume = document.getElementById("experiences");
    if (resume) {
      window.scrollTo({
        top: resume.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex min-h-screen">
      <div className="m-auto flex max-w-screen-lg">
        <div className={styles.titleSection}>
          <div className="flex flex-col gap-2">
            <h1 className={styles.title}>Hugo Dussert</h1>
            <p className="font-display uppercase text-muted-foreground">
              Développeur web & mobile
            </p>
          </div>
          <p className={styles.description}>
            Expert en développement d&apos;applications avec plus de 3 ans
            d&apos;expérience. Je suis spécialisé en React, React Native,
            Next.js et TypeScript. Communiquant, curieux et force de
            proposition, je serai un véritable atout pour votre équipe.
          </p>
          <div className="flex gap-4">
            <Button className="uppercase" variant="outline" asChild={true}>
              <a href="mailto:hugo.dussertsarthe@gmail.com">Me contacter</a>
            </Button>
            <Button className="uppercase" onClick={scrollToExperiences}>
              Voir mon CV
            </Button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="absolute bottom-[-20vh] left-0 right-0 top-0 z-10 hidden sm:block">
        <PhoneScene />
      </div>
    </div>
  );
};
const styles = {
  titleSection:
    "flex flex-1 flex-col items-center sm:items-start justify-around gap-12 px-4 py-16 z-20",
  title: "text-5xl tracking-tight sm:text-[5rem] font-display",
  description: "text-muted-foreground",
};
