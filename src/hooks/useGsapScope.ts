import { RefObject, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

/**
 * Executa `setup` dentro de um gsap.context limitado ao elemento da seção.
 * Tweens e ScrollTriggers são revertidos no unmount.
 * `setup` pode devolver uma limpeza extra (ex.: matchMedia.revert).
 */
export function useGsapScope(scope: RefObject<HTMLElement>, enabled: boolean, setup: () => void | (() => void)) {
  useLayoutEffect(() => {
    if (!enabled || !scope.current) return;
    let cleanup: void | (() => void);
    const ctx = gsap.context(() => {
      cleanup = setup();
    }, scope);
    return () => {
      if (cleanup) cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
}
