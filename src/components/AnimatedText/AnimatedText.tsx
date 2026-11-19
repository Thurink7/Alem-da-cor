import { Fragment } from 'react';

interface Props {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  /** 'words': um span por palavra. 'lines': cada palavra numa linha com máscara (revela de baixo). */
  mode?: 'words' | 'lines';
}

export default function AnimatedText({ text, as: Tag = 'h2', className, mode = 'words' }: Props) {
  const words = text.split(' ');
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) =>
        mode === 'lines' ? (
          <span key={i} className="w" aria-hidden="true">
            <span>{w}</span>
          </span>
        ) : (
          <Fragment key={i}>
            <span aria-hidden="true">{w}</span>
            {i < words.length - 1 && ' '}
          </Fragment>
        )
      )}
    </Tag>
  );
}
