import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import { homeObjOne, homeObjThree, homeObjTwo } from '../../theme/DataConstants';
import './Home.css';

const Home = () => {
    const [isOpen, setIsOpen] = useState<any>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar isOpen={isOpen} toggleMenu={() => toggleMenu()} />
            <Sidebar isOpen={isOpen} toggleMenu={() => toggleMenu()} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
