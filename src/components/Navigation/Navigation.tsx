import ChapterIndicator from '../ChapterIndicator';

interface Props {
  n: string;
  title: string;
}

export default function Navigation({ n, title }: Props) {
  return (
    <header>
      <b>ALÉM DA COR</b>
      <ChapterIndicator n={n} title={title} />
    </header>
  );
}
