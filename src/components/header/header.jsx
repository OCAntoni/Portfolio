import React, { useState } from 'react';

import Logo from "../../assets/images/logo2.webp"
import BannerImg from "../../assets/images/winter_moutain_day2.webp"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }
    
    return (
        <>
        <header id='home'>
            <div className="logo-name">
                <img className="logo-img" src={Logo} alt="logo antoni castagné" />
                <h1 className="name">
                    Antoni Castagné
                </h1>
            </div>
            <nav>
                <button className="menu-toggle" onClick={toggleMenu} aria-label="menu déroulant mobile">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <ul className={`list-sections ${isMenuOpen ? 'show' : ''}`}>
                    <a href="#home" onClick={closeMenu}>
                        <li className="overline">Accueil</li>
                    </a>
                    <a href="#news" onClick={closeMenu}>
                        <li>News</li>
                    </a>
                    <a href="#about" onClick={closeMenu}>
                        <li>A propos</li>
                    </a>
                    <a href="#skills" onClick={closeMenu}>
                        <li>Compétences</li>
                    </a>
                    <a href="#works" onClick={closeMenu}>
                        <li>Mes projets</li>
                    </a>
                    <a href="#contact" onClick={closeMenu}>
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </header>
        <div className="banner">
          <img className="banner-img" src={BannerImg} alt="paysage d'une route vers une montagne enneiger" />
      </div>
      </>
    )
}

export default Header