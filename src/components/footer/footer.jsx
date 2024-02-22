import { NavLink } from "react-router-dom"

import Logo from "../../assets/images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const url1 = 'https://github.com/OCAntoni';
    const url2 = 'https://www.linkedin.com/in/antoni-castagné-677876270';

    const adressEmail = 'anto.castagne@hotmail.fr'; 

    function sendEmail() {
        window.location.href = `mailto:${adressEmail}`;
    }

    return (
        <footer id="contact">
            <h4>Retrouvez moi sur</h4>
            <div className="social-network">
                <div className="icon-social-network">
                    <NavLink to={url1} target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </NavLink>
                    <NavLink to={url2} target="_blank">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    </NavLink>
                </div>
            </div>
            <button className='contact' onClick={sendEmail}>
                <span className="contact-text">Contactez moi</span> 
                <FontAwesomeIcon className="contact-icon" icon={faPaperPlane} />
            </button>
            <p>
                © Antoni Castagné 2024 - Tous droits réservés
            </p>
            <img className="logo-img" src={Logo} alt="logo antoni castagné" />
        </footer>
    )
}

export default Footer