import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as LinkSroll } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = (props: any) => {
    const [scrollNav, setScrollNav] = useState<any>(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='navContainer' style={{ backgroundColor: scrollNav ? '#000' : 'transparent' }}>
            <div className='navBar'>
                <Link to='/' className='navLogo' onClick={() => toggleHome()}>dolla</Link>
                <div className='mobileIcon' onClick={() => props.toggleMenu()}>
                    <FaBars />
                </div>
                <ul className='navMenu'>
                    <li className='navItem'>
                        <LinkSroll to='about' className='navLinks' smooth={true} duration={500} spy={true} offset={-80}>About</LinkSroll>
                    </li>
                    <li className='navItem'>
                        <LinkSroll to='discover' className='navLinks' smooth={true} duration={500} spy={true} offset={-80}>Discover</LinkSroll>
                    </li>
                    <li className='navItem'>
                        <LinkSroll to='services' className='navLinks' smooth={true} duration={500} spy={true} offset={-80}>Services</LinkSroll>
                    </li>
                    <li className='navItem'>
                        <LinkSroll to='signup' className='navLinks' smooth={true} duration={500} spy={true} offset={-80}>Sign Up</LinkSroll>
                    </li>
                </ul>
                <nav className='navButton'>
                    <Link to='/signin' className='navBtnLink'>Sign In</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
