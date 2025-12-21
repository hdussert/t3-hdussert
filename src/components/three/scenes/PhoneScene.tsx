"use client";

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, lazy, useRef } from "react";
import * as THREE from "three";
import Iframe from "~/components/Iframe";
import Loader from "~/components/three/Loader";
import { GroupLookingAtPointer } from "../GroupLookingAtPointer";
const PhoneModel = lazy(() => import("../models/PhoneModel"));

function AnimatedGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });
  return (
    <group ref={groupRef} scale={0}>
      {children}
    </group>
  );
}

const DEFAULT_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://hdussert.vercel.app";

export default function PhoneScene({ url }: { url?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const camera = {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: [0, 0, 6],
  } as const;

  return (
    <div className="absolute top-0 right-0 bottom-[-20vh] left-0 hidden sm:block">
      <Canvas ref={canvasRef} camera={camera} className="touch-none">
        <PerspectiveCamera makeDefault {...camera} />
        <Environment preset="studio" />
        <Float floatIntensity={1}>
          <GroupLookingAtPointer
            canvasRef={canvasRef}
            iframeRef={iframeRef}
            position={[1, 0.4, 0]}
          >
            <Suspense fallback={<Loader />}>
              <AnimatedGroup>
                <PhoneModel />
                <Html
                  transform
                  distanceFactor={1.17}
                  position={[0, 0, 0.08]}
                  scale={[1.23, 1.23, 1.0]}
                  className="h-225 w-107.5 overflow-hidden rounded-[55px] border-none bg-black select-none" // 2.09433962264 (ratio)
                >
                  <Iframe
                    className="no-scrollbar mr-4 size-full pr-[-1rem]"
                    ref={iframeRef}
                    url={url || DEFAULT_URL}
                  />
                </Html>
              </AnimatedGroup>
            </Suspense>
          </GroupLookingAtPointer>
        </Float>
        <ContactShadows
          position-y={-1.5}
          opacity={0.4}
          scale={10}
          blur={2.4}
          color="#FFF"
        />
      </Canvas>
    </div>
  );
}
