"use client";

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
} from "@react-three/drei";
import {
  Canvas,
  GroupProps,
  Node,
  ThreeElements,
  useFrame,
} from "@react-three/fiber";
import { useControls } from "leva";
import React, {
  ReactNode,
  RefObject,
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { cn } from "~/lib/utils";

const GroupLookingAtPointer = ({
  canvasRef,
  ...props
}: GroupProps & { canvasRef: RefObject<HTMLDivElement> }) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePosition({
          x: ev.clientX - (rect.left + rect.width / 2.0),
          y: ev.clientY - (rect.top + rect.height / 2.0),
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [canvasRef]);

  useFrame(() => {
    if (groupRef.current && canvasRef.current) {
      const vector = new THREE.Vector3(
        (mousePosition.x / canvasRef.current.clientWidth) * 2 - 1,
        -(mousePosition.y / canvasRef.current.clientHeight) * 2 + 1,
        5,
      );
      groupRef.current.lookAt(vector);
    }
  });
  return (
    <group {...props} ref={groupRef}>
      {props.children}
    </group>
  );
};

const PhoneModel = lazy(() => import("../_components/phone-model"));
export const Phone = () => {
  const camera = {
    fov: 45,
    near: 0.1,
    far: 2000,
    position: [0, 5, 5],
  } as const;

  // ...
  const canvasRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={canvasRef} className="absolute bottom-0 right-0 top-0">
      <Suspense fallback={null}>
        <Canvas className="bg-blue-400" camera={camera}>
          <>
            <Environment preset="city" />
            <Float floatIntensity={3}>
              <GroupLookingAtPointer canvasRef={canvasRef} position={[0, 0, 0]}>
                <PhoneModel />
                <Html
                  transform
                  distanceFactor={1.17}
                  position={[0, 0, 0.08]}
                  scale={[1.37, 1.37, 1.0]}
                >
                  <iframe
                    className={cn(
                      "pointer-events-none h-[804px] w-[375px] rounded-[45px] border-none bg-black",
                    )}
                    src="https://paldex.io/palworld/stats-calculator/"
                  />
                </Html>
              </GroupLookingAtPointer>
            </Float>

            <ContactShadows
              position-y={-2}
              opacity={0.4}
              scale={5}
              blur={2.4}
            />
          </>
        </Canvas>
      </Suspense>
    </div>
  );
};
