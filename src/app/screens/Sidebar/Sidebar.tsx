import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Link as LinkSroll } from 'react-scroll';

const Sidebar = (props: any) => {
    return (
        <div className='sidebarContainer' style={{ opacity: props.isOpen ? '100%' : '0', top: props.isOpen ? '0' : '-100%' }}>
            <div className='iconContainer' onClick={() => props.toggleMenu()}>
                <FaTimes className='iconStyle' />
            </div>
            <div className='sideBarWrapper'>
                <ul className='sideBarMenu'>
                    <LinkSroll to='about' className='sideBarLink' smooth={true} duration={500} spy={true} offset={-80} onClick={() => props.toggleMenu()}>About</LinkSroll>
                    <LinkSroll to='discover' className='sideBarLink' smooth={true} duration={500} spy={true} offset={-80} onClick={() => props.toggleMenu()}>Discover</LinkSroll>
                    <LinkSroll to='services' className='sideBarLink' smooth={true} duration={500} spy={true} offset={-80} onClick={() => props.toggleMenu()}>Services</LinkSroll>
                    <LinkSroll to='signup' className='sideBarLink' smooth={true} duration={500} spy={true} offset={-80} onClick={() => props.toggleMenu()}>Sign Up</LinkSroll>
                </ul>
                <nav className='sideBtnWrap'>
                    <Link to='/signin' className='sideBarRoute'>Sign In</Link>
                </nav>
            </div>
        </div>
    )
};

export default Sidebar;
