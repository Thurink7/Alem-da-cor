import { useRef } from 'react';
import Chapter from '../components/Chapter';
import CinematicVideo from '../components/CinematicVideo';
import { blockHeights, chapters, structureSteps } from '../data/chapters';
import { posterSrc, videoSrc } from '../data/media';
import { pinnedTimeline } from '../animations/pinned';
import { useGsapScope } from '../hooks/useGsapScope';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { gsap } from 'gsap';

export default function Structure() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGsapScope(ref, !reduced, () => {
    gsap.set('.step', { autoAlpha: 0 });
    pinnedTimeline('.pin', '+=360%')
      .to('.s0', { autoAlpha: 1, duration: 1 })
      .to('.blocks b', { scaleY: 1, stagger: 0.25, duration: 1 }, '+=.2')
      .to('.s0', { autoAlpha: 0, duration: 0.6 }, '-=1')
      .to('.s1', { autoAlpha: 1, duration: 1 })
      .to('.s1', { autoAlpha: 0, duration: 0.6 }, '+=1')
      .to('.blocks b', { scaleY: 1.2, stagger: 0.1, duration: 1 }, '<')
      .to('.s2', { autoAlpha: 1, duration: 1 });
  });

  return (
    <Chapter ref={ref} meta={chapters.structure}>
      <div className="pin">
        <CinematicVideo src={videoSrc(3)} poster={posterSrc(3)} variant="v3" />
        <div className="blocks" aria-hidden="true">
          {blockHeights.map((h, i) => (
            <b key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        {structureSteps.map((s, i) => (
          <div className={`step s${i}`} key={s.title}>
            <h2>{s.title}</h2>
            {s.text && <p>{s.text}</p>}
          </div>
        ))}
      </div>
    </Chapter>
  );
}
