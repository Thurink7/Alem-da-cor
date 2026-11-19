import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGsapScope } from '../../hooks/useGsapScope';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useGsapScope(ref, !reduced, () => {
    gsap.to(ref.current, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });
  });
  return <div id="bar" ref={ref} aria-hidden="true" />;
}
