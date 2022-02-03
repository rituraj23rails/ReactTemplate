import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './Footer.css';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <footer className='footerContainer'>
            <div className='footerWrap'>
                <div className='footerLinksContainer'>
                    <div className='footerLinksWrapper'>
                        <div className='footerLinkItems'>
                            <div className='footerLinkTitle'>About Us</div>
                                <Link to='/' className='footerLink'>How it works</Link>
                                <Link to='/' className='footerLink'>Testimonials</Link>
                                <Link to='/' className='footerLink'>Careers</Link>
                                <Link to='/' className='footerLink'>Investors</Link>
                                <Link to='/' className='footerLink'>Terms of Service</Link>
                        </div>
                        <div className='footerLinkItems'>
                            <div className='footerLinkTitle'>Videos</div>
                                <Link to='/' className='footerLink'>Submit Video</Link>
                                <Link to='/' className='footerLink'>Ambassadors</Link>
                                <Link to='/' className='footerLink'>Agency</Link>
                                <Link to='/' className='footerLink'>Influencer</Link>
                        </div>
                    </div>
                    <div className='footerLinksWrapper'>
                        <div className='footerLinkItems'>
                            <div className='footerLinkTitle'>Contact Us</div>
                                <Link to='/' className='footerLink'>Contact</Link>
                                <Link to='/' className='footerLink'>Support</Link>
                                <Link to='/' className='footerLink'>Destinations</Link>
                                <Link to='/' className='footerLink'>Spnsorships</Link>
                                <Link to='/' className='footerLink'>Terms of Service</Link>
                        </div>
                        <div className='footerLinkItems'>
                            <div className='footerLinkTitle'>Social Media</div>
                                <Link to='/' className='footerLink'>Instagram</Link>
                                <Link to='/' className='footerLink'>Facebook</Link>
                                <Link to='/' className='footerLink'>Youtube</Link>
                                <Link to='/' className='footerLink'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <div className='socialMedia'>
                    <div className='socialMediaWrap'>
                        <Link to='/' className='socialLogo' onClick={() => toggleHome()}>dolla</Link>
                        <small className='websiteRights'>dolla © 2022. All rights reserved.</small>
                        <div className='socialIcons'>
                            <a href='/' className='socialIconLink' target='_blank' aria-label='Facebook'><FaFacebook /></a>
                            <a href='/' className='socialIconLink' target='_blank' aria-label='Instagram'><FaInstagram /></a>
                            <a href='/' className='socialIconLink' target='_blank' aria-label='Youtube'><FaYoutube /></a>
                            <a href='/' className='socialIconLink' target='_blank' aria-label='Twitter'><FaTwitter /></a>
                            <a href='/' className='socialIconLink' target='_blank' aria-label='Linkedin'><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
