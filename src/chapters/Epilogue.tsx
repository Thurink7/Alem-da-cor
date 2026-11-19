import { useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '../components/AnimatedText';
import Chapter from '../components/Chapter';
import { chapters, djamila } from '../data/chapters';
import { djamilaSrc } from '../data/media';
import { pinnedTimeline } from '../animations/pinned';
import { useGsapScope } from '../hooks/useGsapScope';
import { useReducedMotion } from '../hooks/useReducedMotion';

/** Tela amarela dedicada a Djamila Ribeiro: encerramento editorial. */
export default function Epilogue() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGsapScope(ref, !reduced, () => {
    const mm = gsap.matchMedia(ref.current as Element);

    // Desktop: cena fixa; a cortina amarela, o nome, a foto e os textos entram em sequência.
    mm.add('(min-width:761px)', () => {
      gsap.set('.yp,.yq', { autoAlpha: 0, y: 24 });
      gsap.set('.yname .w span', { yPercent: 110 });
      gsap.set('.yr', { autoAlpha: 0, x: 140, clipPath: 'inset(0 0 0 100%)' });
      gsap.set('.yground', { yPercent: 100 });
      pinnedTimeline('.ypin', '+=420%')
        .fromTo('.ybg', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power2.inOut' })
        .to('.yname .w span', { yPercent: 0, stagger: 0.35, duration: 1.1 }, '+=.1')
        .to('.yground', { yPercent: 0, duration: 0.8 }, '<')
        .to('.yr', { autoAlpha: 1, x: 0, clipPath: 'inset(0 0 0 0%)', duration: 1.4 }, '<.3')
        .to('.yq', { autoAlpha: 1, y: 0, duration: 0.8 }, '+=.2')
        .to('.yp1', { autoAlpha: 1, y: 0, duration: 0.8 }, '+=.3')
        .to('.yp2', { autoAlpha: 1, y: 0, duration: 0.8 }, '+=.5')
        .to('.yp3', { autoAlpha: 1, y: 0, duration: 0.8 }, '+=.3')
        .to({}, { duration: 1.2 })
        .to('.ygrid,.yground', { autoAlpha: 0, duration: 0.9 })
        .to('.yfin span', { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 });
    });

    // Celular: sem pin, revelações simples ligadas à rolagem.
    mm.add('(max-width:760px)', () => {
      gsap.fromTo('.ybg', { clipPath: 'inset(100% 0 0 0)' }, {
        clipPath: 'inset(0% 0 0 0)', ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top 90%', end: 'top 30%', scrub: true },
      });
      gsap.from('.yname .w span', { yPercent: 110, stagger: 0.15, scrollTrigger: { trigger: '.yname', start: 'top 85%', end: 'top 55%', scrub: true } });
      gsap.from('.yr', { autoAlpha: 0, x: 60, scrollTrigger: { trigger: '.yr', start: 'top 90%', end: 'top 60%', scrub: true } });
      gsap.from('.yq,.yp', { autoAlpha: 0, y: 20, stagger: 0.1, scrollTrigger: { trigger: '.yl', start: 'top 70%', end: 'bottom 70%', scrub: true } });
      gsap.to('.yfin span', { opacity: 1, y: 0, stagger: 0.2, ease: 'none', scrollTrigger: { trigger: '.yfin', start: 'top 80%', end: 'bottom 70%', scrub: 1 } });
    });

    return () => mm.revert();
  });

  const restart = () => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });

  return (
    <Chapter ref={ref} meta={chapters.epilogue}>
      <div className="pin ypin">
        <div className="ybg" />
        <div className="ygrid">
          <div className="yl">
            <AnimatedText as="h2" className="yname" mode="lines" text={djamila.name} />
            <p className="yq q">{djamila.question}</p>
            <p className="yp yp1">{djamila.intro}</p>
            <p className="yp yp2">{djamila.more}</p>
            <p className="yp yp3">{djamila.books}</p>
          </div>
          <figure className="yr">
            <img src={djamilaSrc} alt="Retrato de Djamila Ribeiro" width={375} height={429} />
          </figure>
        </div>
        <div className="yground" />
        <AnimatedText as="h2" className="yfin" text={djamila.closing} />
      </div>
      <div className="end">
        <b>ALÉM DA COR</b>
        <button id="restart" type="button" onClick={restart}>
          Reiniciar a experiência
        </button>
      </div>
    </Chapter>
  );
}
