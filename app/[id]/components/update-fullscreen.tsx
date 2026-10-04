export default function UpdateFullscreen({
  title,
  body,
  publish_date
}: {
  title: string,
  body: string,
  publish_date: string
}
) {
  return (
    <article className="update-fullscreen">
      <h3 className="text-center fullscren-title">{title}</h3>
      <h5 className='text-left gray-text'>{publish_date}</h5>
      <p className="text-left newline">{body}</p>
    </article>
  );
}
