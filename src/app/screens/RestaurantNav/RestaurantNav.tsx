import React from 'react';
import { CALL_HOME, CART_ICON, LOCATION_ICON, SEARCH_ICON } from '../../assets/assets';
import './RestaurantNav.css';

const RestaurantNav = (props: any) => {
    return (
        <div className='restaurantNavContainer'>
            <h1 className='restaurantBrandH1'>Studio Store</h1>
            <div className='phoneContainer'>
                <img src={CALL_HOME} alt='CALL_HOME' className='phoneIcon' />
                <div className='classUsContainer'>
                    <p className='classUsText'>CALL US</p>
                    <p className='phoneNoText'>+1 123 456 1234</p>
                </div>
            </div>
            <div className='storeSearchContainer'>
                <div className='storeContainer'>
                    <img src={LOCATION_ICON} alt='LOCATION_ICON' className='locationIcon' />
                    <div className='storeAddressContainer'>
                        <p className='storeAddressText'>Store Address</p>
                        <p className='storeAddressDataText'>503 Branson Turnpike Suite 127</p>
                    </div>
                </div>
                <div className='verticalLine'/>
                <div className='searchContainer'>
                    <img src={SEARCH_ICON} alt='SEARCH_ICON' className='searchIcon' />
                    <input type={'text'} placeholder='Search Products...' className='searchInput' />
                </div>
            </div>
            <img src={CART_ICON} alt='CART_ICON' className='cartIcon' />
            <button className='loginButton'>Login / Sign up</button>
        </div>
    );
};

export default RestaurantNav;
