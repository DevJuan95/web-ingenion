import Image from 'next/image';
import logo from "../../public/logo-medium.png";

export default function Navigation() {
    return (
        <>
            <nav className="navigation">
                <a href="https://ingeion.com.co" className="navigation__logo-link">
                    <Image src={logo} className="navigation__logo" alt="Logo Ingenion" />
                </a>
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link" aria-current="page">Inicio</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className='navigation__link'>Nosotros</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className='navigation__link'>Servicios</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className='navigation__link'>Contacto</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}