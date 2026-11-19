import { useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '../components/AnimatedText';
import Chapter from '../components/Chapter';
import CinematicVideo from '../components/CinematicVideo';
import { actions, chapters } from '../data/chapters';
import { posterSrc, videoSrc } from '../data/media';
import { useGsapScope } from '../hooks/useGsapScope';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Future() {
  const closeRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGsapScope(closeRef, !reduced, () => {
    gsap.to('.mono h2 span', {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      ease: 'none',
      scrollTrigger: { trigger: '.mono', start: 'top 60%', end: 'bottom 70%', scrub: 1 },
    });
  });

  return (
    <>
      <Chapter meta={chapters.future}>
        <CinematicVideo sticky src={videoSrc(6)} poster={posterSrc(6)} variant="v6" />
        <div className="read">
          <h2>O futuro também depende daquilo que fazemos hoje.</h2>
          <ul className="acts">
            {actions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </Chapter>
      <Chapter ref={closeRef} meta={chapters.futureClose}>
        <div className="mono">
          <AnimatedText text="Uma sociedade antirracista não se constrói no silêncio." />
        </div>
      </Chapter>
    </>
  );
}
