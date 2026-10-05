export default function Header() {
    return(
        <div>
            <h1 className="text-center">{"Fight An Ant"}</h1>
            <p className="text-center">{"La documentación oficial de Fight An Ant"}</p>
            <div className="page-header">
                <h4>
                    <a className="link" href="/">{"Home"}</a>
                </h4>
                <h4>
                    <a className="link" href="/about-us">{"Sobre nosotros"}</a>
                </h4>
                <h4>
                    <a className="link" href="/guides">{"Guías"}</a>
                </h4>
                <h4>
                    <a className="link" href="/credits">{"Créditos"}</a>
                </h4>
            </div>
            <hr/>
        </div>
    );
}
