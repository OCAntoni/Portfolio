import Logo from "../../assets/images/logo2.png"
import BannerImg from "../../assets/images/winter_moutain_day1.jpg"

function Header() {

    function toggleMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle.classList.toggle('menu-open');
    
        const nav = document.querySelector('.list-sections');
        nav.classList.toggle('show');
    }
    
    return (
        <>
        <header>
            <div className="logo-name">
                <img className="logo-img" src={Logo} alt="logo antoni castagné" />
                <h1 className="name">
                    Antoni Castagné
                </h1>
            </div>
            <nav>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <ul className="list-sections">
                    <li>Accueil</li>
                    <a href="#news">
                        <li>News</li>
                    </a>
                    <a href="#about">
                        <li>A propos</li>
                    </a>
                    <a href="#skills">
                        <li>Compétences</li>
                    </a>
                    <a href="#works">
                        <li>Mes projets</li>
                    </a>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        <div className="banner">
          <img className="banner-img" src={BannerImg} alt="paysage d'une router vers une montagne enneiger" />
      </div>
      </>
    )
}

export default Header