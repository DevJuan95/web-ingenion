import Image from 'next/image';
import logo from "../../public/logo-medium.png";
import { useEffect, useState } from 'react';

interface Props {
    className: string;
}


export default function Navigation({className}:Props) {
    
    const [onPageScroll, setOnPageScroll] = useState(false);
    const [showFullPageNav, setShowFullPageNav] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setOnPageScroll(true);
        }
        else {
            setOnPageScroll(false);
            setShowFullPageNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor); 
        return () => window.removeEventListener("scroll", changeNavbarColor);
    });

    return (
        <>
            <nav className={`navigation ${className}`}>
                <a href="https://ingeion.com.co" className={onPageScroll? 'navigation__logo-box':  'navigation__logo-box is-visible'}>
                    <Image src={logo} className="navigation__logo" alt="Logo Ingenion" />
                </a>
                <ul className={onPageScroll? 'navigation__list':  'navigation__list is-visible'}>
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
                <div className={onPageScroll ? "navigation__button is-visible": "navigation__button"} onClick={() => { console.log(showFullPageNav);setShowFullPageNav(!showFullPageNav)}}>
                    <span className='navigation__icon'></span>
                </div>
                <div className={showFullPageNav ? "full-page-nav__background active": "full-page-nav__background"} >&nbsp;</div>
            </nav>
        </>
    )
}