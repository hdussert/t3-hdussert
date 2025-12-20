import { useFrame, useThree, type GroupProps } from "@react-three/fiber";
import { useEffect, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

type GroupLookingAtPointerProps = GroupProps & {
  canvasRef: RefObject<HTMLCanvasElement>;
  iframeRef?: RefObject<HTMLIFrameElement>;
};

export const GroupLookingAtPointer = ({
  canvasRef,
  iframeRef,
  ...props
}: GroupLookingAtPointerProps) => {
  const { camera } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOverIframe, setIsMouseOverIframe] = useState(false);
  const groupRef = useRef<THREE.Group | null>(null);
  const targetedPos = useRef(new THREE.Vector3());

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePos({
        x: ev.clientX,
        y: ev.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    if (!iframeRef?.current) return;
    const _iframeRef = iframeRef.current; // Use a stable reference
    const mouseEnterHandler = () => {
      setIsMouseOverIframe(true);
    };
    const mouseLeaveHandler = () => {
      setIsMouseOverIframe(false);
    };
    _iframeRef.addEventListener("mouseenter", mouseEnterHandler);
    _iframeRef.addEventListener("mouseleave", mouseLeaveHandler);
    return () => {
      _iframeRef.removeEventListener("mouseenter", mouseEnterHandler);
      _iframeRef.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, [iframeRef?.current]);

  useFrame(() => {
    if (groupRef.current && canvasRef.current) {
      let ndc = new THREE.Vector3(0, 0, 0.95);
      let lerpSpeed = 0.075;
      if (isMouseOverIframe) {
        // If the mouse is over an iframe, it should look forward
        lerpSpeed = 0.01;
        ndc.x = groupRef.current.position.x;
        ndc.y = groupRef.current.position.y;
        ndc.z = 1000;
      } else {
        // Convert the mouse position to normalized device coordinates (NDC)
        const canvas = canvasRef.current.getBoundingClientRect();
        ndc.x = ((mousePos.x - canvas.left) / canvas.width) * 2 - 1;
        ndc.y = -((mousePos.y - canvas.top) / canvas.height) * 2 + 1;
      }

      // Unproject the NDC position to world coordinates
      const worldPosition = ndc.unproject(camera);
      targetedPos.current = targetedPos.current.lerp(worldPosition, lerpSpeed);
      groupRef.current.lookAt(targetedPos.current);
    }
  });
  return (
    <group {...props} ref={groupRef}>
      {props.children}
    </group>
  );
};
