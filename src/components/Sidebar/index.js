import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='nav-bar__logo' to='/'>
            <img src={LogoS} alt='logo' />
            <p className='nav-bar__logo--sub-logo'>@rleydev</p>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/arleymi/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/rleydev'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCEwYA0MYOnJjch8lRZ8Z-3Q'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar