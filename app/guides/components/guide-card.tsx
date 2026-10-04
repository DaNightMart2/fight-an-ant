import Link from "next/link";

export default function GuideCard({
  id,
  title,
  body
}: {
  id: string,
  title: string,
  body: string
}
) {
  return (
    <article className="guide-card">
      <h3 className="text-center">{title}</h3>

      {body.length > 200 ? (
        <div>
          <p className="text-left blur guide-excerpt newline">{body}</p>
          <Link href={`/${id}`} className="gray-text">{"Leer más..."}</Link>
        </div>
      ) : (
        <p className="text-left">{body}</p>
      )}
    </article>
  );
}
