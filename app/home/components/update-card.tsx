import Link from "next/link";

export default function UpdateCard({
  id,
  title,
  body,
  publish_date
}: {
  id: string,
  title: string,
  body: string,
  publish_date: string
}
) {
  return (
    <article className="update-card">
      <h3 className="text-center">{title}</h3>
      <h5 className="text-left gray-text">{publish_date}</h5>

      {body.length > 200 ? (
        <div>
          <p className="text-left blur update-excerpt newline">{body}</p>
          <Link href={`/${id}`} className="gray-text">{"Leer más..."}</Link>
        </div>
      ) : (
        <p className="text-left">{body}</p>
      )}
    </article>
  );
}
