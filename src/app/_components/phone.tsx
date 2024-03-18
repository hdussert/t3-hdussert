"use client";

import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, lazy } from "react";

const PhoneModel = lazy(() => import("../_components/phone-model"));
function Phone() {
  return (
    // <Suspense>
    <Canvas
      className="h-full w-full"
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
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
            <PhoneModel />
          </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      </>
    </Canvas>
    // </Suspense>
  );
}

export default Phone;
