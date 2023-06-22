import Image from 'next/image';
import logo from "../../public/logo-medium.png";
import { useEffect, useState } from 'react';

interface Props {
    className: string;
}


export default function Navigation({className}:Props) {
    
    const [onPageScroll, setOnPageScrolle] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setOnPageScrolle(true);
        }
        else {
            setOnPageScrolle(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor); 
        return () => window.removeEventListener("scroll", changeNavbarColor);
    });

    return (
        <>
            <nav className={onPageScroll ? `navigation navigation--hidden-principal ${className}`: `navigation ${className}`}>
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
                <div className="navigation__button" onClick={() => {alert("Hola mundo")}}>
                    <span className='navigation__icon'></span>
                </div>
            </nav>
        </>
    )
}