"use client";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { PhoneScene } from "./three/scenes/phone-scene";

export const Hero = () => {
  // const mainRef = useRef<HTMLDivElement>(null);

  // // Make sure subpixel calculation are not being used
  // useEffect(() => {
  //   const adjustMargin = () => {
  //     if (mainRef.current) {
  //       const windowWidth = window.innerWidth;
  //       const divMaxWidth = 1024;

  //       const margin = (windowWidth - divMaxWidth) / 2;

  //       mainRef.current.style.marginLeft = `${Math.floor(margin)}px`;
  //       mainRef.current.style.marginRight = `${Math.round(margin)}px`;
  //     }
  //   };

  //   adjustMargin();

  //   window.addEventListener("resize", adjustMargin);
  //   return () => window.removeEventListener("resize", adjustMargin);
  // }, []);

  return (
    <div
      // ref={mainRef}
      className={cn("relative flex min-h-screen")}
    >
      <div className={cn("m-auto flex max-w-screen-lg")}>
        <div className={styles.titleSection}>
          <div className={cn("flex flex-col gap-2")}>
            <p className={cn("font-display uppercase text-muted-foreground")}>
              Développeur web & mobile
            </p>
            <h1 className={styles.title}>Hugo Dussert</h1>
          </div>
          <p className={styles.description}>
            Expert en développement d&apos;applications avec plus de 3 ans
            d&apos;expérience. Je suis spécialisé en React, React Native,
            Next.js et TypeScript. Communiquant, curieux et force de
            proposition, je serai un véritable atout pour votre équipe.
          </p>
          <div className="flex gap-4">
            <Button className="uppercase" variant="outline">
              Me contacter
            </Button>
            <Button className="uppercase">Voir mon CV</Button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1]">
        <PhoneScene />
      </div>
    </div>
  );
};
const styles = {
  titleSection: cn(
    "flex flex-1 flex-col items-center sm:items-start justify-around gap-12 px-4 py-16 z-10",
  ),
  title: cn("text-5xl tracking-tight sm:text-[5rem] font-display"),
  description: cn("text-muted-foreground"),
};
