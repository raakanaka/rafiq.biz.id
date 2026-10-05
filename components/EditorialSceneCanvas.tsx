import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { CanvasTexture, SRGBColorSpace, type Group } from 'three';
import { projects } from '../lib/projects';
import type { SceneVariant } from './EditorialScene';

interface SceneProps {
  variant: SceneVariant; active: boolean; mobile: boolean; ornament: boolean;
  colors: string[]; host: React.RefObject<HTMLDivElement | null>;
}

function Screen({ colors, phone = false }: { colors: string[]; phone?: boolean }) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = phone ? 480 : 1024; canvas.height = phone ? 920 : 640;
    const ctx = canvas.getContext('2d')!;
    const [orange, cream, ink, white] = colors;
    ctx.fillStyle = white; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = cream; ctx.fillRect(0, 0, canvas.width, 64);
    ctx.fillStyle = ink; ctx.font = 'bold 24px sans-serif'; ctx.fillText('Rafiq / Portfolio', 30, 42);
    ctx.fillStyle = orange; ctx.fillRect(30, 94, 8, 72);
    ctx.fillStyle = ink; ctx.font = 'bold 46px sans-serif'; ctx.fillText('Build, Create', 56, 126); ctx.fillText('& Stand Out', 56, 180);
    ctx.font = '22px sans-serif'; ctx.fillText('Web Developer & SEO Specialist', 30, 230);
    const selected = projects.filter(p => ['mitunbongkar', 'haloexpert', 'ekspora'].includes(p.slug));
    selected.forEach((p, i) => {
      const y = 285 + i * (phone ? 180 : 106);
      ctx.fillStyle = cream; ctx.fillRect(30, y, canvas.width - 60, phone ? 155 : 88);
      ctx.fillStyle = ink; ctx.font = 'bold 26px sans-serif'; ctx.fillText(p.title, 50, y + 38);
      ctx.font = '18px sans-serif'; ctx.fillText(p.industry, 50, y + 68);
      if (phone) { ctx.font = '16px sans-serif'; ctx.fillText(p.tech.join(' / '), 50, y + 110); }
    });
    const map = new CanvasTexture(canvas); map.colorSpace = SRGBColorSpace; return map;
  }, [colors, phone]);
  useEffect(() => () => texture.dispose(), [texture]);
  return <mesh position={[0, 0, 0.071]}><planeGeometry args={phone ? [0.94, 1.86] : [3.8, 2.38]} /><meshBasicMaterial map={texture} toneMapped={false} /></mesh>;
}

function Workspace({ mobile, colors, host }: SceneProps) {
  const group = useRef<Group>(null);
  const phone = useRef<Group>(null);
  const target = useRef({ x: 0, y: 0, scroll: 0 });
  useEffect(() => {
    const el = host.current;
    const move = (e: PointerEvent) => { if (!el) return; const r = el.getBoundingClientRect(); target.current.x = (e.clientX - r.left) / r.width - .5; target.current.y = (e.clientY - r.top) / r.height - .5; };
    const leave = () => { target.current.x = target.current.y = 0; };
    const scroll = () => { if (!el) return; const r = el.getBoundingClientRect(); target.current.scroll = Math.max(-1, Math.min(1, (innerHeight / 2 - r.top - r.height / 2) / innerHeight)); };
    el?.addEventListener('pointermove', move); el?.addEventListener('pointerleave', leave); document.addEventListener('rafiq:scroll', scroll); scroll();
    return () => { el?.removeEventListener('pointermove', move); el?.removeEventListener('pointerleave', leave); document.removeEventListener('rafiq:scroll', scroll); };
  }, [host]);
  useFrame((state, delta) => {
    if (!group.current) return;
    const ease = 1 - Math.exp(-4 * Math.min(delta, .05));
    group.current.rotation.y += (-.25 + target.current.x * .22 - group.current.rotation.y) * ease;
    group.current.rotation.x += (.06 + target.current.y * .1 + target.current.scroll * .08 - group.current.rotation.x) * ease;
    if (phone.current) phone.current.position.y = -.06 + Math.sin(state.clock.elapsedTime * .9) * .075;
  });
  const material = <meshStandardMaterial color={colors[1]} roughness={.55} metalness={.15} />;
  return <group ref={group} rotation={[.06, -.25, 0]} position={[-.15, -.15, 0]} scale={mobile ? .92 : 1}>
    <group rotation={[0, 0, -.04]}>
      <group position={[-.35, .45, 0]} rotation={[-.12, 0, 0]}>
        <RoundedBox args={[4.06, 2.68, .13]} radius={.12} smoothness={mobile ? 2 : 4}>{material}</RoundedBox>
        <Screen colors={colors} />
      </group>
      <RoundedBox position={[-.35, -.99, .85]} args={[4.25, .13, 2.05]} radius={.06} smoothness={2}>{material}</RoundedBox>
      {!mobile && Array.from({ length: 40 }, (_, i) => <mesh key={i} position={[-1.91 + (i % 10) * .345, -.912, .25 + Math.floor(i / 10) * .25]}><boxGeometry args={[.27, .018, .18]} /><meshStandardMaterial color={colors[2]} roughness={.8} /></mesh>)}
      <RoundedBox position={[-.35, -.911, 1.55]} args={[1.15, .012, .5]} radius={.04} smoothness={2}><meshStandardMaterial color={colors[3]} /></RoundedBox>
    </group>
    <group ref={phone} position={[1.73, -.06, 1.25]} rotation={[0, -.18, .08]}>
      <RoundedBox args={[1.09, 2.08, .14]} radius={.13} smoothness={mobile ? 2 : 4}><meshStandardMaterial color={colors[0]} roughness={.48} /></RoundedBox>
      <Screen phone colors={colors} />
      <mesh position={[0, .9, .086]}><boxGeometry args={[.3, .035, .012]} /><meshBasicMaterial color={colors[2]} /></mesh>
    </group>
    <RoundedBox position={[0, -1.22, .2]} args={[5.3, .22, 3.3]} radius={.1} smoothness={2}><meshStandardMaterial color={colors[3]} roughness={.85} /></RoundedBox>
  </group>;
}

export default function EditorialSceneCanvas(props: SceneProps) {
  return <Canvas frameloop={props.active ? 'always' : 'never'} dpr={props.mobile ? 1 : [1, 1.5]} gl={{ alpha: true, antialias: !props.mobile, powerPreference: 'low-power' }} camera={{ position: [0, 1.1, 8.4], fov: 39 }} eventSource={props.host as React.RefObject<HTMLElement>} className="editorial-scene-canvas">
    <ambientLight intensity={1.6} /><directionalLight position={[2, 6, 5]} intensity={2} /><directionalLight position={[-5, 2, 3]} intensity={.5} color={props.colors[1]} />
    <Workspace {...props} />
  </Canvas>;
}
