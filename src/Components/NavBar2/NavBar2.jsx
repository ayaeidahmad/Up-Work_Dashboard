import { Link, Outlet, useNavigate } from 'react-router-dom'
import './NavBar2.css'
import LogoCompany from './../../assets/Images/logo.svg'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar2 = ({userData,Loge,color}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navigate =useNavigate ()
    function Logout() {
        navigate('/login')
        localStorage.removeItem('token')
    }
    let newColor
    if(color == '#ffffff')
    {
         newColor = '#000'
    }else
    {
        newColor = color
    }
    
    return (
        <>
        <section className="dash-navbar" style={{backgroundColor:`${newColor}`}}>
            <Container className='dash'>
                <img src={`http://127.0.0.1:8000${Loge}`} style={{width: '40px'}} alt="LogoCompany" className='logo'/>
                <Link to="/nav" className='jobs'>Jobs</Link>
                <Link to="/articles" className='article'>Article</Link>
                <Link to="/cvs"  className='cvs'>CVs</Link>
                <p className='company-name'>{userData}</p>
                <button className='logout' onClick={Logout}>LogOut</button>
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