import ButtonOutline from "../ui/button/ButtonOutline";

export default function Header() {
    return (
        <header className="main-banner">
            <div className="main-banner__text-box">
                <h1 className="main-banner__text">
                    <span className="main-banner__text--primary">Ingenion es tecnología e inovación.</span>
                    <span className="main-banner__text--secondary">Construyendo soluciones seguras</span>
                </h1>
                <div className="main-banner__link-box">
                    <ButtonOutline link={"#"} text={"Descubra nuestros servicios"} />
                </div>
            </div>
        </header>
    )
}