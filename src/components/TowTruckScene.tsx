import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function SpeedLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line) => {
        line.position.x -= delta * 40; 
        if (line.position.x < -20) {
          line.position.x = 20;
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {Array.from({ length: 80 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 40, 
            Math.random() * 10, 
            (Math.random() - 0.5) * 20
          ]}
        >
          <boxGeometry args={[Math.random() * 6 + 2, 0.02, 0.02]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={Math.random() * 0.4} />
        </mesh>
      ))}
    </group>
  );
}

function TowTruck() {
  const group = useRef<THREE.Group>(null);
  const wheels = useRef<THREE.Group[]>([]);

  useFrame((state, delta) => {
    wheels.current.forEach((wheel) => {
      if (wheel) wheel.rotation.x -= delta * 15;
    });
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 25) * 0.03;
    }
  });

  const primaryColor = "#ea580c"; 
  const darkColor = "#111827";
  const metalColor = "#9ca3af";
  const windowColor = "#0f172a";

  return (
    <group ref={group}>
      {/* Cab */}
      <mesh position={[1.5, 1.4, 0]} castShadow>
        <boxGeometry args={[1.5, 1.5, 2.2]} />
        <meshStandardMaterial color={primaryColor} roughness={0.2} metalness={0.3} />
      </mesh>
      
      {/* Windows */}
      <mesh position={[1.5, 1.6, 1.11]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial color={windowColor} roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[1.5, 1.6, -1.11]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial color={windowColor} roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[2.26, 1.6, 0]}>
        <boxGeometry args={[0.05, 0.6, 1.8]} />
        <meshStandardMaterial color={windowColor} roughness={0.1} metalness={0.8} />
      </mesh>
      
      {/* Hood */}
      <mesh position={[2.8, 1.0, 0]} castShadow>
        <boxGeometry args={[1.2, 1.1, 2.2]} />
        <meshStandardMaterial color={primaryColor} roughness={0.2} metalness={0.3} />
      </mesh>

      {/* Grill */}
      <mesh position={[3.41, 1.0, 0]} castShadow>
        <boxGeometry args={[0.05, 0.9, 1.8]} />
        <meshStandardMaterial color={metalColor} roughness={0.4} metalness={0.8} />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[3.4, 1.2, 0.7]}>
        <boxGeometry args={[0.1, 0.2, 0.3]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[3.4, 1.2, -0.7]}>
        <boxGeometry args={[0.1, 0.2, 0.3]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      
      {/* Chassis/Bed */}
      <mesh position={[-2.0, 0.7, 0]} castShadow>
        <boxGeometry args={[5.5, 0.4, 2.2]} />
        <meshStandardMaterial color={darkColor} roughness={0.5} />
      </mesh>

      {/* Boom Base */}
      <mesh position={[-1.5, 1.6, 0]} castShadow>
        <boxGeometry args={[1.2, 1.4, 1.8]} />
        <meshStandardMaterial color={darkColor} roughness={0.5} />
      </mesh>

      {/* Boom Arm */}
      <mesh position={[-3.0, 2.6, 0]} rotation={[0, 0, Math.PI / 5]} castShadow>
        <boxGeometry args={[4, 0.4, 0.6]} />
        <meshStandardMaterial color={primaryColor} roughness={0.3} metalness={0.5} />
      </mesh>
      
      {/* Hook */}
      <mesh position={[-4.5, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.5]} />
        <meshStandardMaterial color={metalColor} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Wheels */}
      {[
        [2.5, 0.5, 1.2],
        [2.5, 0.5, -1.2],
        [-1, 0.5, 1.2],
        [-1, 0.5, -1.2],
        [-2.5, 0.5, 1.2],
        [-2.5, 0.5, -1.2],
        [-4.0, 0.5, 1.2],
        [-4.0, 0.5, -1.2],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]} ref={(el) => { if (el) wheels.current[i] = el; }}>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
            <meshStandardMaterial color="#000000" roughness={0.9} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, pos[2] > 0 ? 0.21 : -0.21, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.05, 16]} />
            <meshStandardMaterial color={metalColor} roughness={0.3} metalness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function TowTruckScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[-10, 5, 12]} fov={40} />
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 40]} />
        
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={1} color="#ea580c" />
        <pointLight position={[5, 2, 5]} intensity={0.5} color="#ffffff" />

        <Float
          speed={2} 
          rotationIntensity={0.2} 
          floatIntensity={0.2}
          floatingRange={[-0.1, 0.1]}
        >
          <group rotation={[0, Math.PI / -6, 0]}>
            <TowTruck />
          </group>
        </Float>

        <SpeedLines />

        <ContactShadows position={[0, -0.1, 0]} opacity={0.8} scale={30} blur={2} far={4} />
        <Environment preset="night" />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent pointer-events-none"></div>
    </div>
  );
}
