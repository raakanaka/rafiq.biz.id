import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import type { Group } from 'three';
import type { SceneVariant } from './EditorialScene';

interface SceneProps {
  variant: SceneVariant;
  active: boolean;
  mobile: boolean;
  ornament: boolean;
  colors: string[];
  host: React.RefObject<HTMLDivElement | null>;
}

function Composition({ variant, active, mobile, ornament, colors, host }: SceneProps) {
  const invalidate = useThree(state => state.invalidate);
  useEffect(() => {
    if (!active) return;
    const el = host.current;
    const render = () => {
      if (group.current && el) {
        const rect = el.getBoundingClientRect();
        group.current.userData.scroll = Math.max(-1, Math.min(1, (window.innerHeight / 2 - rect.top - rect.height / 2) / window.innerHeight));
      }
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
    const t = state.clock.elapsedTime;
    const scroll = Number(group.current.userData.scroll || 0);
    const ease = 1 - Math.exp(-5 * Math.min(delta, 0.05));
    group.current.rotation.y += Math.min(delta, 0.05) * (variant === 'hero' ? 0.35 : 0.16);
    group.current.rotation.x += (y * 0.32 + scroll * 0.35 - group.current.rotation.x) * ease;
    group.current.rotation.z += (-x * 0.24 - group.current.rotation.z) * ease;
    group.current.position.y += (Math.sin(t * 0.9) * 0.16 + scroll * 0.45 - group.current.position.y) * ease;
    if (variant !== 'hero') group.current.children.forEach((child, i) => {
      // Small independent motion makes each module legible without shaking the text.
      if (!child.userData.origin) child.userData.origin = child.position.clone();
      const origin = child.userData.origin;
      child.position.y = origin.y + Math.sin(t * 1.1 + i * 1.3) * 0.13;
      child.position.z = origin.z + Math.sin(t * 0.7 + i) * 0.16 + scroll * (i % 2 ? 0.18 : -0.18);
      child.rotation.y += Math.min(delta, 0.05) * (i % 2 ? -0.12 : 0.18);
    });
    if (ring.current) {
      ring.current.rotation.x += delta * 0.5;
      ring.current.rotation.y += delta * 0.2;
    }
  });

  if (variant !== 'hero') {
    const material = (index: number) => <meshStandardMaterial color={index % 2 ? secondary : primary} roughness={0.42} metalness={0.25} />;
    return <group ref={group} rotation={[-0.2, -0.35, 0.1]}>
      {variant === 'process' && <>
        {[0, 1, 2, 3].map(i => <group key={i} position={[(i - 1.5) * 1.05, (i % 2 ? 0.4 : -0.4), 0]}>
          <mesh><icosahedronGeometry args={[0.42, 0]} />{material(i)}</mesh>
          {i < 3 && <mesh position={[0.52, i % 2 ? -0.4 : 0.4, 0]} rotation={[0, 0, i % 2 ? -0.92 : 0.92]}><cylinderGeometry args={[0.035, 0.035, 1.3, 6]} />{material(i)}</mesh>}
        </group>)}
      </>}
      {(variant === 'services' || variant === 'skills') && <>
        {[0, 1, 2, 3].map(i => <mesh key={i} position={[(i % 2 - 0.5) * 1.45, (Math.floor(i / 2) - 0.5) * 1.45, i * 0.2]} rotation={[0, i * 0.25, i * 0.18]}>
          {i === 0 ? <boxGeometry args={[1, 1, 1]} /> : i === 1 ? <octahedronGeometry args={[0.75, 0]} /> : i === 2 ? <cylinderGeometry args={[0.55, 0.55, 1, mobile ? 8 : 16]} /> : <icosahedronGeometry args={[0.7, 0]} />}{material(i)}
        </mesh>)}
      </>}
      {variant === 'projects' && <>
        {[0, 1, 2].map(i => <group key={i} position={[i * 0.28 - 0.28, i * 0.18 - 0.18, -i * 0.55]} rotation={[0, 0, i * 0.14]}>
          {[-1, 1].map(n => <group key={n}>
            <mesh position={[n * 1.35, 0, 0]}><boxGeometry args={[0.1, 2, 0.16]} />{material(i)}</mesh>
            <mesh position={[0, n, 0]}><boxGeometry args={[2.8, 0.1, 0.16]} />{material(i)}</mesh>
          </group>)}
        </group>)}
        <mesh position={[0, 0, 0.8]}><octahedronGeometry args={[0.58, 0]} />{material(0)}</mesh>
        <mesh rotation={[0.8, 0.3, 0.5]}><torusGeometry args={[1.9, 0.025, 6, mobile ? 24 : 48]} />{material(1)}</mesh>
      </>}
      {variant === 'experience' && [0, 1, 2, 3, 4].map(i => <mesh key={i} position={[(i - 2) * 0.22, (i - 2) * 0.58, 0]} rotation={[0, i * 0.12, 0]}><boxGeometry args={[2.5 - i * 0.2, 0.18, 1.5]} />{material(i)}</mesh>)}
    </group>;
  }

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

export default function EditorialSceneCanvas({ variant, active, mobile, ornament, colors, host }: SceneProps) {
  return <Canvas
    frameloop={active ? 'always' : 'never'}
    dpr={mobile ? 1 : [1, 1.5]}
    gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
    camera={{ position: [0, 0, ornament ? 3.4 : variant === 'hero' ? 6.5 : variant === 'process' ? 6.5 : 5.4], fov: 42 }}
    eventSource={host as React.RefObject<HTMLElement>}
    className="editorial-scene-canvas"
  >
    <ambientLight intensity={1.1} />
    <directionalLight position={[4, 5, 3]} intensity={2.2} color={colors[1]} />
    <directionalLight position={[-4, -3, -2]} intensity={0.9} color={colors[0]} />
    <Composition variant={variant} active={active} mobile={mobile} ornament={ornament} colors={colors} host={host} />
  </Canvas>;
}
