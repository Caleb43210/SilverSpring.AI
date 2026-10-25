import { useEffect, useState } from 'react';

type TweenVars = Record<string, unknown>;
type Timeline = { to: (target: string | Element, vars: TweenVars, position?: string | number) => Timeline; fromTo: (target: string | Element, from: TweenVars, to: TweenVars, position?: string | number) => Timeline; kill: () => void };
type MatchMedia = { add: (query: string, setup: () => void) => void; revert: () => void };
export type MotionEngine = { registerPlugin: (plugin: unknown) => void; matchMedia: () => MatchMedia; context: (setup: () => void, scope: Element) => { revert: () => void }; fromTo: (target: string | Element | Element[], from: TweenVars, to: TweenVars) => { kill: () => void }; to: (target: string | Element, vars: TweenVars) => { kill: () => void }; timeline: (vars?: TweenVars) => Timeline };
declare global { interface Window { gsap?: MotionEngine; ScrollTrigger?: { refresh: () => void } } }

export function useMotionPreference() {
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}
