"use client";

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { Suspense, lazy, useRef } from "react";
import { cn } from "~/lib/utils";
import { GroupLookingAtPointer } from "../group-looking-at-pointer";

const PhoneModel = lazy(() => import("../models/phone-model"));

export const PhoneScene = () => {
  const { resolvedTheme } = useTheme();
  const isInIframe = typeof window !== "undefined" && window !== window.parent;

  const camera = {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: [0, 0, 6],
  } as const;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  return (
    <Suspense fallback={null}>
      <Canvas ref={canvasRef} camera={camera}>
        <>
          <PerspectiveCamera ref={cameraRef} makeDefault {...camera} />
          <Environment preset="city" />
          <Float floatIntensity={2}>
            <group position={[1, 0, 0]}>
              <GroupLookingAtPointer
                cameraRef={cameraRef}
                canvasRef={canvasRef}
                position={[0, 0, 0]}
              >
                <PhoneModel>
                  <Html
                    transform
                    distanceFactor={1.17}
                    position={[0.16, 1.34, 0.08]}
                    scale={[1, 1, 1.0]}
                  >
                    {isInIframe ? (
                      <div
                        className={cn(
                          "h-[1110px] w-[530px] rounded-[75px] border-none bg-primary",
                        )}
                      ></div>
                    ) : (
                      <iframe
                        className={cn(
                          "h-[1110px] w-[530px] rounded-[75px] border-none bg-black",
                        )}
                        src={`http://localhost:3000?theme=${resolvedTheme === "dark" ? "light" : "dark"}`}
                      />
                    )}
                  </Html>
                </PhoneModel>
              </GroupLookingAtPointer>
            </group>
          </Float>

          <ContactShadows
            position-y={-2}
            opacity={0.4}
            scale={10}
            blur={2.4}
            color={resolvedTheme === "dark" ? "white" : "black"}
          />
        </>
      </Canvas>
    </Suspense>
  );
};
