import React, { useState } from 'react';
import { VIDEO_DATA } from '../../assets/assets';
import { Link as LinkSroll } from 'react-scroll';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import './HeroSection.css';

const HeroSection = () => {
    const [hover, setHover] = useState<any>(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div className='heroContainer' id='home'>
            <div className='heroBg'>
                <video className='videoBg' autoPlay loop muted src={VIDEO_DATA} />
            </div>
            <div className='heroContent'>
                <h1 className='heroH1'>Virtual Banking Made Easy</h1>
                <p className='heroP'>Sign up for a new account today and receive $250 in credit towards your next payment.</p>
                <nav className='heroBtnWrapper'>
                    <LinkSroll to='signup' className='signupButton' smooth={true} duration={500} spy={true} offset={-80} onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <div className='arrowForward'><MdArrowForward/></div> : <div className='arrowRight'><MdKeyboardArrowRight /></div>}
                    </LinkSroll>
                </nav>
            </div>
        </div>
    );
};

export default HeroSection;
