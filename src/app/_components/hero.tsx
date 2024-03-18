import React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/styles/helpers";
import Phone from "./phone";

export const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.titleSection}>
        <div className="flex flex-col gap-2">
          <p className="font-display uppercase text-muted-foreground">
            Développeur web & mobile
          </p>
          <h1 className={styles.title}>Hugo Dussert</h1>
        </div>
        <p className="bold font-body text-muted-foreground">
          Expert en développement d&apos;applications avec plus de 3 ans
          d&apos;expérience.
          <br /> Je suis spécialisé en React, React Native, Next.js et
          TypeScript.
          <br /> Bon communiquant, curieux et force de proposition, je serais un
          réel atout pour votre équipe.
        </p>
        <div className="flex gap-4">
          <Button className="uppercase" variant="outline">
            Me contacter
          </Button>
          <Button className="uppercase">Voir mon CV</Button>
        </div>
      </div>
      <div className={styles.phoneSection}>
        <Phone />
      </div>
    </div>
  );
};
const styles = {
  heroWrapper: cn("flex flex-col sm:flex-row justify-center"),
  titleSection: cn(
    "container flex flex-2 flex-col items-center sm:items-start justify-around gap-12 px-4 py-16",
  ),
  phoneSection: cn("flex-1"),
  title: cn("text-5xl tracking-tight sm:text-[5rem] font-display"),
};
