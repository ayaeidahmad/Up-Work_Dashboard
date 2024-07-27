import { Link, Outlet } from 'react-router-dom'
import './NavBar2.css'
import LogoCompany from './../../assets/Images/logo.svg'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        <section className="dash-navbar">
            <Container className='dash'>
                <img src={LogoCompany} alt="LogoCompany" className='logo'/>
                <Link to="" className='jobs'>Jobs</Link>
                <Link to="/articles" className='article'>Article</Link>
                <Link to="/cvs"  className='cvs'>CVs</Link>
                <p className='company-name'>Focal X Agency</p>
            </Container>
            <Container className='menu'>
                {/* menu */}
                <button onClick={toggleMenu} className="menu-button">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {isMenuOpen && (
                    <div className="menu-options">
                        <img src={LogoCompany} alt="LogoCompany" className='logo'/>
                        <Link to="" className='jobs'>Jobs</Link>
                        <Link to="/articles" className='article'>Article</Link>
                        <Link to="/cvs"  className='cvs'>CVs</Link>
                        <p className='company-name'>Focal X Agency</p>
                    </div>
                )}
            </Container>
        </section>
        <Outlet></Outlet>
        </>
    )
}

export default NavBar2