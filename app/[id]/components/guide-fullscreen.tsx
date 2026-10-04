export default function GuideFullscreen({
  title,
  body
}: {
  title: string,
  body: string
}
) {
  return (
    <article className="update-fullscreen">
      <h3 className="text-center fullscren-title">{title}</h3>
      <p className="text-left newline">{body}</p>
    </article>
  );
}
