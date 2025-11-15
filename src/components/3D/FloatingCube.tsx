import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { RoundedBox } from '@react-three/drei';

interface FloatingCubeProps {
  position: [number, number, number];
  color: string;
}

const FloatingCube = ({ position, color }: FloatingCubeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[1, 1, 1]} position={position} radius={0.1} smoothness={4}>
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </RoundedBox>
  );
};

export default FloatingCube;
