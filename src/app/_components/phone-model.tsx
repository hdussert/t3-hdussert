import { useGLTF } from "@react-three/drei";

const PHONE_MODEL_URL =
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf";

export default function PhoneModel({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { scene } = useGLTF(PHONE_MODEL_URL);

  return (
    <primitive
      object={scene}
      position-y={-1.34}
      position-x={-0.17}
      position-z={0.0}
    >
      {children}
    </primitive>
  );
}
useGLTF.preload(PHONE_MODEL_URL);
