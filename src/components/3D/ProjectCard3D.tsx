import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float } from '@react-three/drei';
import FloatingCube from './FloatingCube';

const ProjectScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A855F7" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <FloatingCube position={[0, 0, 0]} color="#38BDF8" />
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </>
  );
};

const ProjectCard3D = () => {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ProjectScene />
      </Canvas>
    </div>
  );
};

export default ProjectCard3D;
