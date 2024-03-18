import { Html, useGLTF } from "@react-three/drei";

const PHONE_MODEL_URL =
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf";
const PHONE_SCREEN_WIDTH = "375px";
const PHONE_SCREEN_HEIGHT = "804px";
const PHONE_SCREEN_RADIUS = "45px";

export default function PhoneModel() {
  const { scene } = useGLTF(PHONE_MODEL_URL);

  return (
    <primitive
      object={scene}
      position-y={-1.2}
      position-x={-0.1}
      position-z={0}
    >
      <Html
        transform
        distanceFactor={1.17}
        position={[0.166, 1.335, 0.08]}
        scale={[1.37, 1.37, 1]}
      >
        <iframe
          src="https://hdussert.vercel.app/"
          className={`bg-black`}
          style={{
            // inline style allowed here
            pointerEvents: "auto",
            border: "none",
            borderRadius: PHONE_SCREEN_RADIUS,
            width: PHONE_SCREEN_WIDTH,
            height: PHONE_SCREEN_HEIGHT,
          }}
        />
      </Html>
    </primitive>
  );
}
useGLTF.preload(PHONE_MODEL_URL);
