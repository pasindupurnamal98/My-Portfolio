import './index.scss';
import Logos from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link,NavLink } from 'react-router-dom';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className='logo' to="/"> 
        <img src={Logos} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="pasindu" />
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
                <a target={'_blank'} rel='noreferrer' href={'https://www.linkedin.com/in/pasindu-s-b-a8b8b8b8/'}>
                <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
            </a>
        </li>

        <li>
                <a target={'_blank'} rel='noreferrer' href={'#'}>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>

        <li>
                <a target={'_blank'} rel='noreferrer' href={'https://www.linkedin.com/in/pasindu-s-b-a8b8b8b8/'}>
                <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
            </a>
        </li>
    </ul>

  </div>
  )

export default Sidebar;