import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s  .png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion'

const Sidebar=()=>(

    <motion.div className='nav-bar' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4, ease: "easeInOut" }}

    >

    <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'/>
        <img  className='sub-logo'src={LogoSubtitle} alt='logo-sub'/>
    </Link>


    <nav>
        <NavLink exact="true" activeclassname="active" to='/'>

            <FontAwesomeIcon icon={faHome} color='#4d4d4d4e'/>

        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>

            <FontAwesomeIcon icon={faUser} color='#4d4d4d4e'/>

        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>

            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d4e'/>

        </NavLink>


    </nav>


    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rajeen-balasuriya-61b93a243/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>

        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/RajeenBalasuriya'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
    </ul>


    </motion.div>

)


export default Sidebar