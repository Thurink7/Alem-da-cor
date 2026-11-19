import { useRef } from 'react';
import { gsap } from 'gsap';
import Chapter from '../components/Chapter';
import CinematicVideo from '../components/CinematicVideo';
import { chapters } from '../data/chapters';
import { posterSrc, videoSrc } from '../data/media';
import { pinnedTimeline } from '../animations/pinned';
import { useGsapScope } from '../hooks/useGsapScope';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Introduction() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGsapScope(ref, !reduced, () => {
    gsap.set('.lines > *', { autoAlpha: 0 });
    pinnedTimeline('.pin', '+=420%')
      .fromTo('.l0', { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 1 })
      .to('.l0', { autoAlpha: 0, scale: 1.12, duration: 1 }, '+=1')
      .fromTo('.l1', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 })
      .to('.l1', { autoAlpha: 0, duration: 0.7 }, '+=1')
      .fromTo('.l3', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 1 })
      .to('.l3', { autoAlpha: 0, duration: 0.7 }, '+=1')
      .fromTo('.l4', { autoAlpha: 0, scale: 1.15 }, { autoAlpha: 1, scale: 1, duration: 1 })
      .to('.hint', { autoAlpha: 0, duration: 0.3 }, 0)
      // a câmera "se aproxima" enquanto a história avança
      .to('.v1', { scale: 1.18, duration: 9 }, 0);
  });

  return (
    <Chapter ref={ref} meta={chapters.intro}>
      <div className="pin">
        <CinematicVideo src={videoSrc(1)} poster={posterSrc(1)} variant="v1" />
        <div className="shade" />
        <div className="lines">
          <h1 className="l0">O racismo não começa onde você pensa.</h1>
          <h2 className="l1">Antes de entender o racismo, precisamos entender a sociedade.</h2>
          <p className="l3">
            Segundo o Censo 2022 do IBGE, 55,5% dos brasileiros se declaram pretos ou pardos. A questão racial está no centro da sociedade.
          </p>
          <h2 className="l4">Mas nem sempre todos foram tratados como iguais.</h2>
        </div>
        <div className="hint">Role para começar</div>
      </div>
    </Chapter>
  );
}
