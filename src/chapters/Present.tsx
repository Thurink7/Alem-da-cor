import { useRef } from 'react';
import { gsap } from 'gsap';
import Chapter from '../components/Chapter';
import CinematicVideo from '../components/CinematicVideo';
import { chapters, stats } from '../data/chapters';
import { posterSrc, videoSrc } from '../data/media';
import { useGsapScope } from '../hooks/useGsapScope';
import { useReducedMotion } from '../hooks/useReducedMotion';

const fmt = (v: number) => `${v.toFixed(1).replace('.', ',')}%`;

export default function Present() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGsapScope(ref, !reduced, () => {
    gsap.utils.toArray<HTMLElement>('.stat').forEach((s, i) => {
      const num = s.querySelector<HTMLElement>('.big')!;
      const state = { v: 0 };
      gsap
        .timeline({ scrollTrigger: { trigger: s, start: 'top 75%', end: 'bottom 55%', scrub: 1 } })
        .to(state, { v: stats[i].value, ease: 'none', onUpdate: () => { num.textContent = fmt(state.v); } }, 0)
        .to(s.querySelector('.meter i'), { scaleX: 1, ease: 'none' }, 0);
    });
  });

  return (
    <Chapter ref={ref} meta={chapters.present}>
      <CinematicVideo sticky src={videoSrc(4)} poster={posterSrc(4)} variant="v4" position="25% center" />
      <div className="read">
        <h2>A história não ficou no passado.</h2>
        {stats.map((s) => (
          <div className="stat" key={s.source}>
            <div className="big">{reduced ? fmt(s.value) : '0%'}</div>
            <div className="meter">
              <i style={reduced ? { transform: 'none' } : undefined} />
            </div>
            <p>{s.text}</p>
            <cite>{s.source}</cite>
          </div>
        ))}
        <p className="note">
          Educação, renda, trabalho e representatividade: inclua os números mais recentes de “Desigualdades Sociais por Cor ou Raça” (IBGE) e do Ipea, com fonte e ano. Nenhum dado foi inventado aqui. Confira os valores nas fontes antes de publicar.
        </p>
      </div>
    </Chapter>
  );
}
