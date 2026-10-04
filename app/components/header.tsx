export default function Header() {
    return(
        <div>
            <div className="page-header">
                <h1>
                    <a className="link" href="/">{"Fight An Ant"}</a>
                </h1>
                <h4>
                    <a className="link" href="/about-us">{"Sobre nosotros"}</a>
                </h4>
                <h4>
                    <a className="link" href="/guide">{"Guía"}</a>
                </h4>
                <h4>
                    <a className="link" href="/credits">{"Créditos"}</a>
                </h4>
            </div>

            <p>{"La documentación oficial de Fight An Ant"}</p>
            <hr/>
        </div>
    );
}
