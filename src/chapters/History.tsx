import { useRef } from 'react';
import { gsap } from 'gsap';
import Chapter from '../components/Chapter';
import CinematicVideo from '../components/CinematicVideo';
import { chapters, timeline } from '../data/chapters';
import { posterSrc, videoSrc } from '../data/media';
import { useGsapScope } from '../hooks/useGsapScope';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function History() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGsapScope(ref, !reduced, () => {
    gsap.to('#tlline', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { trigger: '.tl', start: 'top 70%', end: 'bottom 60%', scrub: true },
    });
    gsap.utils.toArray<HTMLElement>('.ev').forEach((e) =>
      gsap.from(e, {
        autoAlpha: 0,
        x: -30,
        scrollTrigger: { trigger: e, start: 'top 80%', end: 'top 55%', scrub: true },
      })
    );
  });

  return (
    <Chapter ref={ref} meta={chapters.history}>
      <CinematicVideo sticky src={videoSrc(2)} poster={posterSrc(2)} variant="v2" />
      <div className="read">
        <h2>O racismo tem uma história. E ela não começou ontem.</h2>
        <div className="tl">
          <div id="tlline" />
          {timeline.map((ev) => (
            <div className="ev" key={ev.date}>
              <div className="big">{ev.date}</div>
              <p>{ev.text}</p>
            </div>
          ))}
        </div>
        <p className="note">
          Esta seção pede acervos reais (Arquivo Nacional, Biblioteca Nacional, IMS). Imagens geradas por IA não devem ser usadas como registro histórico.
        </p>
      </div>
    </Chapter>
  );
}
