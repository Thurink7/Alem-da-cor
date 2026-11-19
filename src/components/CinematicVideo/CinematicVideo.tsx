import { CSSProperties, useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  src: string;
  poster: string;
  /** Classe de tratamento visual (v1…v6), definida no CSS. */
  variant: string;
  position?: string;
  /** Fundo preso à tela durante a rolagem do capítulo. */
  sticky?: boolean;
}

type NavigatorWithConnection = Navigator & { connection?: { saveData?: boolean } };

/**
 * Vídeo de fundo: mudo, em loop, sem controles. Só carrega e toca enquanto o
 * capítulo está perto da tela. Com movimento reduzido, economia de dados ou
 * erro de carregamento, fica apenas a imagem de reserva (poster).
 */
export default function CinematicVideo({ src, poster, variant, position = 'center', sticky = false }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const reduced = useReducedMotion();
  const lite = reduced || !!(navigator as NavigatorWithConnection).connection?.saveData;

  useEffect(() => {
    const video = ref.current;
    const section = video?.closest('section');
    if (!video || !section || lite || failed) return;
    const play = () => {
      if (!video.getAttribute('src')) video.src = src;
      video.play().catch(() => undefined);
    };
    const pause = () => video.pause();
    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: play,
      onEnterBack: play,
      onLeave: pause,
      onLeaveBack: pause,
    });
    return () => st.kill();
  }, [src, lite, failed]);

  const box = (
    <div className={`vbox ${variant}`} style={{ '--p': `url(${poster})` } as CSSProperties}>
      {!failed && (
        <video
          ref={ref}
          className="video"
          muted
          playsInline
          loop
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          style={{ objectPosition: position }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
  return sticky ? <div className="vs">{box}</div> : box;
}
