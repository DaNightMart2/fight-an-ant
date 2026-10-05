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
    <article className="guide-card text-center">
      <h3 className="text-center">{title}</h3>
      <Link href={`/${id}`} className="gray-text text-center">{"Ver"}</Link>
    </article>
  );
}
