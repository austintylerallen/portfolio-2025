import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Hero3D = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Stars />
        <OrbitControls enableZoom={false} />
        <mesh rotation={[90, 0, 20]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#00ffff" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Hero3D;
