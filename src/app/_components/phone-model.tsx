import { Html, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export default function PhoneModel() {
  const { distanceFactor } = useControls({ distanceFactor: 1.17 });
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf",
  );
  return (
    <primitive
      object={scene}
      position-y={-1.2}
      position-x={-0.1}
      position-z={0}
      // rotation-x={ 0.13 }
    >
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={distanceFactor}
        position={[0.166, 1.335, 0.08]}
        scale={[1.37, 1.37, 1]}
      >
        <iframe src="https://hdussert.vercel.app/" />
      </Html>
    </primitive>
  );
}
