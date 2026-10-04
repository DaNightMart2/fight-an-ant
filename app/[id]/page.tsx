import UpdateFullscreen from "./components/update-fullscreen";
import GuideFullscreen from "./components/guide-fullscreen";
import Header from "#/components/header";
import updates from "@/public/data/updates.json";
import guides from "@/public/data/guides.json";
import { jsx } from "react/jsx-runtime";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Fullscreen({ params }: PageProps) {
  const { id } = await params;
  const update = updates[id as keyof typeof updates];
  const guide = guides[id as keyof typeof guides];

  return(
    update ? (
      <div>
          <Header/>
          <UpdateFullscreen title={update.title} body={update.body} publish_date={update.publish_date} />
      </div>
    ) : guide ? (
      <div>
          <Header/>
          <GuideFullscreen title={guide.title} body={guide.body} />
      </div>
    ) : (
      <div>
          <Header/>
          <article className="update-fullscreen">
            <h3 className="text-center fullscren-title">{"Error 404 < - > Página no encontrada"}</h3>
            <p className="text-left newline">{
              "¡Cuidado! Estás buscando una hormiga que no existe, asegúrate de haber entrado el link (la URL) correctamente.\n\n" +
              "Código de error: \"ANT404\""
            }</p>
          </article>
      </div>
    )
  )
}
