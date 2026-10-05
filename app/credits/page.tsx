import Header from "#/components/header";

export default function Credits() {
  return(
    <div>
      <Header/>
      <article className="update-fullscreen">
        <h3 className="text-center fullscren-title">{"Créditos"}</h3>
        <p className="text-left newline">{
          "@ShaponoY2: Dueño, diseñador principal, programador principal, diseñador gráfico secundario\n\n" +
          "@FeeerLAT: Diseñador gráfico principal, diseñador principal de interfaces (UI / UX)\n\n" +
          "@Josepro9130: Aporte económico al proyecto, diseñador principal de sonido, diseñador secundario de interfaces (UI / UX)\n\n" +
          "@ElSxbag_GG: Diseñador secundario\n\n" +
          "@DaNightMart2: Desarrollador principal de la página web, animador principal en Roblox y compositor principal.\n\n" +
          "Nehuén R.: Compositor principal."
        }</p>
      </article>
    </div>
  );
}
