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
    <article className="update-card text-center">
      <h3 className="text-center">{title}</h3>
      <Link href={`/${id}`} className="gray-text text-center">{"Ver"}</Link>
    </article>
  );
}
