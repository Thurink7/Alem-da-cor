import { gsap } from 'gsap';

/** Cena fixa cuja progressão acompanha a rolagem (pin + scrub). */
export function pinnedTimeline(trigger: string, end: string) {
  return gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger, start: 'top top', end, pin: true, scrub: 1 },
  });
}
