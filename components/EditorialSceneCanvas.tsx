import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import type { Group } from 'three';

interface SceneProps {
  active: boolean;
  mobile: boolean;
  ornament: boolean;
  colors: string[];
  host: React.RefObject<HTMLDivElement | null>;
}

function Composition({ active, mobile, ornament, colors, host }: SceneProps) {
  const invalidate = useThree(state => state.invalidate);
  useEffect(() => {
    if (!active) return;
    const el = host.current;
    const render = () => {
      if (group.current) group.current.position.y = -Math.min(window.scrollY / window.innerHeight, 1) * 0.2;
      invalidate();
    };
    document.addEventListener('rafiq:scroll', render);
    el?.addEventListener('pointermove', render);
    invalidate();
    return () => { document.removeEventListener('rafiq:scroll', render); el?.removeEventListener('pointermove', render); };
  }, [active, host, invalidate]);
  const group = useRef<Group>(null);
  const ring = useRef<Group>(null);
  const [primary, secondary, dark] = colors;

  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += delta * 0.35;
    group.current.rotation.x = y * 0.25;
    group.current.rotation.z = -x * 0.2;
    if (ring.current) {
      ring.current.rotation.x += delta * 0.5;
      ring.current.rotation.y += delta * 0.2;
    }
  });

  if (ornament) {
    return <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color={primary} roughness={0.25} metalness={0.8} wireframe={false} />
        </mesh>
        <mesh>
          <torusGeometry args={[1.35, 0.02, 12, 32]} />
          <meshBasicMaterial color={secondary} transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>;
  }

  return <group ref={group}>
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[mobile ? 0.95 : 1.25, 0.28, mobile ? 72 : 120, 12, 2, 3]} />
        <meshStandardMaterial color={primary} roughness={0.35} metalness={0.4} />
      </mesh>
      <group ref={ring}>
        <mesh>
          <torusGeometry args={[mobile ? 1.5 : 1.9, 0.025, 16, 48]} />
          <meshStandardMaterial color={secondary} roughness={0.3} metalness={0.7} />
        </mesh>
      </group>
      {!mobile && <mesh position={[1.4, 0.8, -0.2]}>
        <octahedronGeometry args={[0.26, 0]} />
        <meshStandardMaterial color={dark} roughness={0.2} metalness={0.9} />
      </mesh>}
      <mesh position={[-1.2, -0.9, 0.3]}>
        <sphereGeometry args={[mobile ? 0.14 : 0.18, 12, 12]} />
        <meshStandardMaterial color={primary} roughness={0.4} metalness={0.6} />
      </mesh>
    </Float>
  </group>;
}

export default function EditorialSceneCanvas({ active, mobile, ornament, colors, host }: SceneProps) {
  return <Canvas
    frameloop={active ? 'always' : 'never'}
    dpr={[1, 2]}
    gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    camera={{ position: [0, 0, ornament ? 3.4 : 6.5], fov: 42 }}
    eventSource={host as React.RefObject<HTMLElement>}
    className="editorial-scene-canvas"
  >
    <ambientLight intensity={1.1} />
    <directionalLight position={[4, 5, 3]} intensity={2.2} color={colors[1]} />
    <directionalLight position={[-4, -3, -2]} intensity={0.9} color={colors[0]} />
    <Composition active={active} mobile={mobile} ornament={ornament} colors={colors} host={host} />
  </Canvas>;
}
