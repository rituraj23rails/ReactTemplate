import React from 'react';
import { DOC_PNG, PIGGY_PNG, LOCK_PNG } from '../../assets/assets';
import './Services.css';

const Services = () => {
  return (
        <div className='servicesContainer' id='services'>
            <h1 className='servicesH1'>Our Services</h1>
            <div className='servicesWrapper'>
                <div className='servicesCard'>
                    <img src={DOC_PNG} className='servicesIcon' alt='Icon1' />
                    <h2 className='servicesH2'>Reduce expenses</h2>
                    <p className='servicesP'>We help reduce your fees and increase your overall revenue.</p>
                </div>
                <div className='servicesCard'>
                    <img src={PIGGY_PNG} className='servicesIcon' alt='Icon2' />
                    <h2 className='servicesH2'>Virtual Offices</h2>
                    <p className='servicesP'>You can access our platform online anywhere in the world.</p>
                </div>
                <div className='servicesCard'>
                    <img src={LOCK_PNG} className='servicesIcon' alt='Icon1' />
                    <h2 className='servicesH2'>Premium Benefits</h2>
                    <p className='servicesP'>Unlock our special membership card that returns 5% cash back.</p>
                </div>
            </div>
        </div>
  );
};

export default Services;
