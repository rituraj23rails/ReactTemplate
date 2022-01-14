import React, { useEffect, useState } from 'react';
import * as IMG_CONST from '../../assets/assets';
import './DashboardStyle.css';

const Dashboard = (props: any) => {

    const renderTopView = () => {
        return (
            <div className='top-container'>
                <img src={IMG_CONST.CLOUD_IMAGE} className='top-cloud-image' alt='cloud_image' />
                <h1>I am Rituraj</h1>
                <h2>a <span>pro</span>grammer</h2>
                <img src={IMG_CONST.CLOUD_IMAGE} className='bottom-cloud-image' alt='cloud_image' />
                <img src={IMG_CONST.MOUNTAIN_IMAGE} className='mountain-image' alt='mountain_image' />
            </div>
        )
    }

    const renderMiddleView = () => {
        return (
            <div className="middle-container">
                <div className="profile">
                    <img src={IMG_CONST.ME_IMAGE} className='profile-image' alt='profile_image' />
                    <h2>Hello</h2>
                    <p className='personal-desc'>I am an iOS and Web Developer. I'm the founder and developer at Softops Technology.</p>
                </div> 
                <div className='border-dots'/>
                <div className="skills">
                    <h2>My Skills.</h2>
                    <div className="skill-row">
                        <img src={IMG_CONST.COMPUTER_IMAGE} className='computer-image' alt='computer_image' />
                        <div className='design-text'>
                            <h3 className='design'>Design & Development</h3>
                            <p className='design-desc'>I started learning to code when I was 12 years old because I wanted to make my own coding club. Over time, I have gained a wealth of experience designing and development mobile and web applications.</p>
                        </div>
                    </div>
                    <div className="skill-row">
                        <img src={IMG_CONST.CHILLIES_IMAGE} className='chillies-image' alt='chillies_image' />
                        <div className='design-text'>
                            <h3 className='design'>Hot Wings Challenge</h3>
                            <p className='design-desc'>But my best skill is actually in eating hot wings. I am the undisputed king of hot wing challenges. Ghost Peppers and Carolina Reapers are my favourite snacks.</p>
                        </div>
                    </div>
                </div>
                <div className='border-dots'/>
                <div className="contact-me">
                    <h2>Get In Touch</h2>
                    <h3 className='love-text'>If you love hot wings as much as I do</h3>
                    <p className='love-desc'>Love hot wings as much as I do? Let's talk about how awesome they are! We can code while we eat hot wings!</p>
                    <a className="btn" href="mailto:name@email.com">CONTACT ME</a>
                </div>
            </div>
            )
    }

    const renderBottomView = () => {
        return (
            <div className="bottom-container">
                <div className='footer-container'>
                    <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
                    <a className="footer-link" href="https://twitter.com/">Twitter</a>
                    <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
                </div>
                <p className='copyright'>© 2022 Rituraj @softops.</p>
            </div>
            )
    }

    return (
        <div className='main-container'>
            {renderTopView()}
            {renderMiddleView()}
            {renderBottomView()}
        </div>
    )
}

export default Dashboard;
