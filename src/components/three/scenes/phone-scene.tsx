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

const iframeUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://hdussert.vercel.app";

export default function PhoneScene() {
  const isInIframe =
    typeof window !== "undefined" && window.self !== window.top;
  const { resolvedTheme } = useTheme();

  const camera = {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: [0, 0, 6],
  } as const;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  return isInIframe ? null : (
    <Suspense fallback={null}>
      <Canvas ref={canvasRef} camera={camera} className={cn("touch-none")}>
        <>
          <PerspectiveCamera makeDefault {...camera} />
          <Environment preset="city" />
          <Float floatIntensity={2}>
            <GroupLookingAtPointer canvasRef={canvasRef} position={[1, 0.4, 0]}>
              <PhoneModel>
                <Html
                  transform
                  distanceFactor={1.17}
                  position={[0.16, 1.34, 0.08]}
                  scale={[1.23, 1.23, 1.0]}
                >
                  <iframe
                    ref={iframeRef}
                    className={cn(
                      "h-[900px] w-[430px] select-none rounded-[55px] border-none bg-black", // 2.09433962264 (ratio)
                    )}
                    src={iframeUrl}
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts"
                  />
                </Html>
              </PhoneModel>
            </GroupLookingAtPointer>
          </Float>

          <ContactShadows
            position-y={-1.5}
            opacity={0.4}
            scale={10}
            blur={2.4}
            color={resolvedTheme === "dark" ? "white" : "black"}
          />
        </>
      </Canvas>
    </Suspense>
  );
}
