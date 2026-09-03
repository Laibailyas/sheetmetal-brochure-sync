import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Coil() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    if (!group.current) return;
    group.current.rotation.y += dt * 0.32;
    const scroll = typeof window !== "undefined" ? window.scrollY * 0.0011 : 0;
    const targetX = -0.35 + state.pointer.y * 0.22 + scroll;
    const targetZ = state.pointer.x * 0.12;
    group.current.rotation.x +=
      (targetX - group.current.rotation.x) * (1 - Math.exp(-4 * dt));
    group.current.rotation.z +=
      (targetZ - group.current.rotation.z) * (1 - Math.exp(-4 * dt));
  });

  return (
    <group ref={group}>
      {/* outer coil body */}
      <mesh castShadow>
        <torusGeometry args={[1.5, 0.62, 48, 128]} />
        <meshStandardMaterial
          color="#9aa6b8"
          metalness={1}
          roughness={0.19}
          envMapIntensity={1.4}
        />
      </mesh>
      {/* wound strip rings */}
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh key={i} rotation-x={Math.PI / 2} position-y={-0.42 + i * 0.14}>
          <torusGeometry args={[1.5 + (i % 2) * 0.012, 0.02, 12, 160]} />
          <meshStandardMaterial
            color="#062547"
            metalness={0.9}
            roughness={0.3}
            emissive="#062547"
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
      {/* inner bore */}
      <mesh rotation-x={Math.PI / 2}>
        <cylinderGeometry args={[0.9, 0.9, 1.3, 64, 1, true]} />
        <meshStandardMaterial
          color="#5b6675"
          metalness={1}
          roughness={0.42}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Beam({
  position,
  rotation,
  color = "#6b7686",
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color?: string;
}) {
  return (
    <Float speed={1.4} floatIntensity={0.9} rotationIntensity={0.35}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[0.16, 2.6, 0.16]} />
        <meshStandardMaterial color={color} metalness={1} roughness={0.3} />
      </mesh>
    </Float>
  );
}

export default function SteelScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.6, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 6, 4]} intensity={2.1} color="#cfe0ff" />
      <directionalLight position={[-6, -2, -4]} intensity={1.1} color="#0a3160" />
      <Suspense fallback={null}>
        <Coil />
        <Beam position={[-2.9, 0.4, -1]} rotation={[0.4, 0.2, 0.5]} />
        <Beam position={[3.0, -0.6, -1.4]} rotation={[-0.3, 0.5, -0.6]} />
        <Beam position={[2.4, 1.4, -2.2]} rotation={[0.9, 0, 0.2]} color="#123f73" />
        <Environment>
          <Lightformer
            intensity={3}
            position={[0, 5, 2]}
            scale={[12, 6, 1]}
            color="#e6efff"
          />
          <Lightformer
            intensity={2.2}
            color="#062547"
            position={[-6, 1, -1]}
            rotation-y={Math.PI / 2}
            scale={[18, 3, 1]}
          />
          <Lightformer
            intensity={1.4}
            color="#8fa4c4"
            position={[6, -2, 1]}
            rotation-y={-Math.PI / 2}
            scale={[18, 3, 1]}
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
