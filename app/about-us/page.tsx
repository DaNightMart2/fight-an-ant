import Header from "#/components/header";

export default function AboutUs() {
  return(
    <div>
      <Header/>
      <article className="update-fullscreen">
        <h3 className="text-center fullscren-title">{"Sobre nosotros"}</h3>
        <p className="text-left newline">{
          "Fight an Ant es un juego survival / tower defense multijugador con historia que se encuentra disponible en Roblox. En este juego, tú y tu equipo deben luchar contra los diferentes tipos de hormigas a lo largo de 75 oleadas, con el objetivo de protegerte a tí mismo, a tus compañeros y a los NPCs que se encuentran en el mapa.\n\n" +
          "Otro gran pilar del juego es la historia, ya que puedes hablar con los NPCs que se encuentran en el lobby y en los diferentes mapas para descubrir más sobre la historia de este universo.\n\nCon este conocimiento, ya estás listo para empezar a jugar. La mejor manera de saber cómo es el juego es experimentándolo. Para empezar a jugar, haga click en el siguiente link:"
        }</p>
        <p className="text-left">
          <a target="_blank" href="https://www.roblox.com/games/133263229989181/Fight-An-Ant">{"Fight An Ant"}</a>
        </p>
        <p className="text-left newline invisible">
          <a className="invisible" href="/secret/rbn1p7Qu6G">{"\n\n\n\n\n\n¿Cómo me encontraste?"}</a>
        </p>
      </article>
    </div>
  );
}
