interface Props {
  n: string;
  title: string;
}

export default function ChapterIndicator({ n, title }: Props) {
  return (
    <div id="ind" aria-live="polite">
      <span>{n}</span>
      {title}
    </div>
  );
}
