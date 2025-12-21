import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <p className="text-white">{progress.toFixed(0)} % loaded</p>
    </Html>
  );
}
