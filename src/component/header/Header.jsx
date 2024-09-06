import {useState} from 'react'
import '../header/header.css';
import logo from "../../assets/logo.jpg"

export default function Header() {
    const [toggle,setToggle] = useState(false);

    const openMenu = () => {
        setToggle(!toggle);
    }

return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav-logo'><img src={logo} alt="logo" /></a>

            <div className={toggle ? "nav-menu show-menu":"nav-menu"}>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='#home' className='nav-link'>
                            <i className='uil uil-estate nav-icon active-link'></i>Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' className='nav-link'>
                            <i className='uil uil-user nav-icon'></i>About
                        </a>
                    </li>
                    <li className='nav-item'> 
                        <a href='#skills' className='nav-link'>
                            <i className='uil uil-file-alt nav-icon'></i>Skills
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#qualification' className='nav-link'>
                            <i className='uil uil-scenery nav-icon'></i>Qualification
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#project' className='nav-link'>
                            <i className='uil uil-scenery nav-icon'></i>Projects
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experience' className='nav-link'>
                            <i className='uil uil-building nav-icon'></i>Experience
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' className='nav-link'>
                            <i className='uil uil-message nav-icon'></i>Contact
                        </a>
                    </li>
                </ul>
                <i className='uil uil-times nav-close' onClick={openMenu}></i>
            </div>

            {/* <div className='dark-mode-toggler' onClick={props.toggleDarkMode}>
                {props.light ? <i className='uil uil-sun'></i> : <i className='uil uil-moon'></i>}
            </div> */}

            <div className='nav-toggle' onClick={openMenu}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
)
}
