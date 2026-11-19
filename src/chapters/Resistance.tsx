import { useRef } from 'react';
import { gsap } from 'gsap';
import Chapter from '../components/Chapter';
import CinematicVideo from '../components/CinematicVideo';
import { chapters, thinkers } from '../data/chapters';
import { posterSrc, videoSrc } from '../data/media';
import { useGsapScope } from '../hooks/useGsapScope';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Resistance() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGsapScope(ref, !reduced, () => {
    gsap.utils.toArray<HTMLElement>('.pan article').forEach((a) => {
      gsap.to(a.querySelector('h3'), {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: { trigger: a, start: 'top 85%', end: 'top 45%', scrub: 1 },
      });
      gsap.from(a.querySelector('p'), {
        autoAlpha: 0,
        y: 24,
        ease: 'none',
        scrollTrigger: { trigger: a, start: 'top 85%', end: 'top 55%', scrub: 1 },
      });
    });
  });

  return (
    <Chapter ref={ref} meta={chapters.resistance}>
      <CinematicVideo sticky src={videoSrc(5)} poster={posterSrc(5)} variant="v5" />
      <div className="read" style={{ paddingBottom: '8vh' }}>
        <h2>Mas essa história também é de resistência.</h2>
      </div>
      <div className="pan">
        {thinkers.map((t) => (
          <article key={t.name}>
            <div className="who">
              <h3>{t.name}</h3>
              <span>{t.role}</span>
            </div>
            <p>{t.text}</p>
          </article>
        ))}
      </div>
    </Chapter>
  );
}
