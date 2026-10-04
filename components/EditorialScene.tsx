import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react';
import { icons } from '../lib/icons';

const Scene = lazy(() => import('./EditorialSceneCanvas'));

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function EditorialScene({ ornament = false }: { ornament?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const small = matchMedia('(max-width: 640px)');
    const probe = document.createElement('canvas');
    let supported = false;
    try {
      const gl = probe.getContext('webgl2');
      supported = !!gl;
      gl?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch { /* Static composition remains visible. */ }
    const style = getComputedStyle(el);
    setColors(['--ac', '--accent-light', '--ink', '--card-bg'].map(token => style.getPropertyValue(token).trim()));
    let visible = false;
    const update = () => {
      setEnabled(supported && !reduce.matches);
      setMobile(small.matches);
      setActive(visible && !document.hidden && !reduce.matches);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(el);
    reduce.addEventListener('change', update);
    small.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    update();
    return () => {
      observer.disconnect();
      reduce.removeEventListener('change', update);
      small.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return <div ref={root} className={`editorial-scene${ornament ? ' editorial-scene-small' : ''}`} aria-hidden="true">
    <div className="editorial-scene-static">
      <span className="editorial-scene-ring" />
      <span className="editorial-scene-core"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" dangerouslySetInnerHTML={{ __html: icons.rocket }} /></span>
    </div>
    {enabled && colors.length === 4 && <SceneBoundary><Suspense fallback={null}>
      <Scene active={active} mobile={mobile} ornament={ornament} colors={colors} host={root} />
    </Suspense></SceneBoundary>}
  </div>;
}
