import { forwardRef, ReactNode } from 'react';
import type { ChapterMeta } from '../../data/chapters';

interface Props {
  meta: ChapterMeta;
  children: ReactNode;
}

const Chapter = forwardRef<HTMLElement, Props>(({ meta, children }, ref) => (
  <section
    ref={ref}
    id={meta.id}
    data-n={meta.n}
    data-t={meta.title}
    data-bg={meta.bg}
    data-fg={meta.fg}
    data-nobg={meta.noBg ? '1' : undefined}
  >
    {children}
  </section>
));
Chapter.displayName = 'Chapter';
export default Chapter;
