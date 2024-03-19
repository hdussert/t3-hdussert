"use client";

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { LegacyRef, Suspense, lazy, useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

const PhoneModel = lazy(() => import("../_components/phone-model"));
export const Phone = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const { top, left } = canvasRef.current.getBoundingClientRect();
        if (!Number.isInteger(top) || !Number.isInteger(left)) {
          canvasRef.current.style.marginLeft = "-0.5px";
        } else {
          canvasRef.current.style.marginLeft = "0px";
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Suspense fallback={null}>
      <div ref={canvasRef} className="h-full w-full">
        <Canvas
          camera={{
            fov: 70,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4.0],
          }}
        >
          <>
            <Environment preset="city" />

            <PresentationControls
              // global
              // rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.4]}
              azimuth={[-2.1, 0.8]}
              // config={{ mass: 2, tension: 400 }}
              // snap={{ mass: 4, tension: 400 }}
            >
              <Float rotationIntensity={0.4}>
                <PhoneModel>
                  <Html
                    transform
                    distanceFactor={1.17}
                    position={[0.166, 1.335, 0.08]}
                    scale={[1.37, 1.37, 1.0]}
                  >
                    <iframe
                      className={cn(
                        "pointer-events-none h-[804px] w-[375px] rounded-[45px] border-none bg-black",
                      )}
                      src="https://paldex.io/palworld/stats-calculator/"
                    />
                  </Html>
                </PhoneModel>
              </Float>
            </PresentationControls>

            <ContactShadows
              position-y={-1.4}
              opacity={0.4}
              scale={5}
              blur={2.4}
            />
          </>
        </Canvas>
      </div>
    </Suspense>
  );
};
