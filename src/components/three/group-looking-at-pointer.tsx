import { useFrame, type GroupProps } from "@react-three/fiber";
import { useEffect, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

type GroupLookingAtPointerProps = GroupProps & {
  canvasRef: RefObject<HTMLCanvasElement>;
  cameraRef: RefObject<THREE.PerspectiveCamera>;
};

export const GroupLookingAtPointer = ({
  canvasRef,
  ...props
}: GroupLookingAtPointerProps) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useFrame(() => {
    if (groupRef.current && canvasRef.current && props.cameraRef.current) {
      // Get the center of the canvas (in screen space)
      const canvasRect = canvasRef.current.getBoundingClientRect();

      // Convert the mouse position to normalized device coordinates (NDC)
      const ndcX =
        ((mousePosition.x - canvasRect.left) / canvasRect.width) * 2 - 1;
      const ndcY =
        -((mousePosition.y - canvasRect.top) / canvasRect.height) * 2 + 1;

      // Create a new vector in NDC
      const ndcPosition = new THREE.Vector3(ndcX, ndcY, 0.95); // 0.5 means that the position is in the middle of the near and far clipping plane

      // Unproject the NDC position to world coordinates
      const worldPosition = ndcPosition.unproject(props.cameraRef.current);

      groupRef.current.lookAt(worldPosition);
    }
  });
  return (
    <group {...props} ref={groupRef}>
      {props.children}
    </group>
  );
};
