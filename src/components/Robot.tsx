import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Robot = () => {
  const armRef = useRef<THREE.Mesh>(null);

  // Анимация руки
  useFrame(({ clock }) => {
    if (armRef.current) {
      const time = clock.getElapsedTime();
      armRef.current.rotation.z = Math.sin(time) * 1; // Машем рукой
    }
  });

  // Пример текстуры металла для материалов
  const metalTexture = new THREE.TextureLoader().load('/path/to/metal_texture.jpg');

  return (
    <group>
      {/* Тело робота */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial map={metalTexture} color="blue" roughness={0.5} metalness={1} />
      </mesh>

      {/* Голова робота */}
      <mesh position={[0, 3, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Левая рука */}
      <mesh position={[-1.2, 2, 0]} castShadow>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial map={metalTexture} color="green" roughness={0.5} metalness={1} />
      </mesh>

      {/* Правая рука */}
      <mesh ref={armRef} position={[1.2, 2, 0]} castShadow>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial map={metalTexture} color="green" roughness={0.5} metalness={1} />
      </mesh>

      {/* Ноги робота */}
      <mesh position={[-0.4, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 1, 0.4]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0.4, 0, 0]} castShadow>
        <boxGeometry args={[0.4, 1, 0.1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};

export default Robot;

