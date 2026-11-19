import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Introduction from './chapters/Introduction';
import History from './chapters/History';
import Structure from './chapters/Structure';
import Present from './chapters/Present';
import Resistance from './chapters/Resistance';
import Future from './chapters/Future';
import Epilogue from './chapters/Epilogue';
import { chapters } from './data/chapters';
import { useReducedMotion } from './hooks/useReducedMotion';

export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState({ n: chapters.intro.n, title: chapters.intro.title });

  useEffect(() => {
    document.body.classList.toggle('rm', reduced);
  }, [reduced]);

  // Fundo, cor do cabeçalho e indicador mudam conforme o capítulo ativo.
  useLayoutEffect(() => {
    const header = document.querySelector('header');
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('section[data-n]').forEach((s) =>
        ScrollTrigger.create({
          trigger: s,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => {
            if (!self.isActive) return;
            setCurrent({ n: s.dataset.n ?? '', title: s.dataset.t ?? '' });
            gsap.to(header, { color: s.dataset.fg || '#101010', duration: reduced ? 0 : 0.5 });
            if (!s.dataset.nobg)
              gsap.to(document.body, { backgroundColor: s.dataset.bg, color: s.dataset.fg, duration: reduced ? 0 : 0.8 });
          },
        })
      );
    }, mainRef);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [reduced]);

  return (
    <>
      <ProgressBar />
      <Navigation n={current.n} title={current.title} />
      <main ref={mainRef}>
        <Introduction />
        <History />
        <Structure />
        <Present />
        <Resistance />
        <Future />
        <Epilogue />
      </main>
    </>
  );
}
