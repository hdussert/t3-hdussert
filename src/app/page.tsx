"use client";

import { unstable_noStore as noStore } from "next/cache";
import Phone from "./_components/phone";
import { CardLink } from "./_components/card-link";
import { cn } from "~/styles/helpers";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Edges,
  Environment,
  Float,
  OrbitControls,
  Outlines,
  PresentationControls,
  Sparkles,
  SpotLight,
  Stars,
  Text3D,
} from "@react-three/drei";
import { ReactNode, Suspense, useEffect } from "react";
import { useControls } from "leva";
export default function Home() {
  noStore();
  const boxes: ReactNode[] = [];

  const { camera } = useControls({
    camera: {
      x: 0,
      y: 1.5,
      z: 20,
    },
  });

  const text = useControls({
    position: [0, 0, -10],
    scale: [-1, 1, 1],
    curveSegments: 24,
    brevelSegments: 3,
    bevelEnabled: true,
    bevelSize: 0.08,
    bevelThickness: 0.03,
    height: 1,
    lineHeight: 0.9,
    letterSpacing: 0.3,
  });
  return (
    <main className={styles.mainWrapper}>
      {/* <Suspense> */}
      <div className="h-screen">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [camera.x, camera.y, camera.z],
          }}
          className={styles.canvas}
        >
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom />
          <>
            <Environment preset="city" />
            <Center>
              <Text3D
                font={"./fonts/Poppins-ExtraBold.typeface.json"}
                position={text.position}
                scale={text.scale}
                curveSegments={text.curveSegments}
                brevelSegments={text.brevelSegments}
                bevelEnabled
                bevelSize={text.bevelSize}
                bevelThickness={text.bevelThickness}
                height={text.height}
                lineHeight={text.lineHeight}
                letterSpacing={text.letterSpacing}
              >
                Hugo Dussert
                <meshToonMaterial c />
                {/* <Edges threshold={8} /> */}
                <Outlines />
              </Text3D>
              <Stars />
              <Sparkles />
            </Center>
            <ContactShadows
              position-y={-1.4}
              opacity={0.4}
              scale={5}
              blur={2.4}
            />
          </>
        </Canvas>
      </div>
      {/* </Suspense> */}
      {/* <div className={styles.leftWrapper}>
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
      </div> */}
      {/* <div>
        <Phone />
      </div> */}
    </main>
  );
}

const styles = {
  mainWrapper: cn(
    "justify-stretch items-stretch min-h-screen  bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white",
  ),
  canvas: cn("w-full h-full"),
  leftWrapper: cn(
    "container flex flex-col items-center justify-around gap-12 px-4 py-16 ",
  ),
  title: cn(
    "text-5xl font-extrabold tracking-tight sm:text-[5rem] font-display",
  ),
  cardsWrapper: cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"),
};
