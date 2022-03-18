import React, { useRef } from 'react';
import RestaurantNav from '../RestaurantNav/RestaurantNav';
import Carousel from 'react-elastic-carousel';
import './RestaurantHome.css';
import { APP_STORE_ICON, BACK_BANNER, BANNER, BOTTOM_BANNER, CART_EMPTY_ICON, FOOTER_COUPON_ICON, FORWARD_BANNER, GOOGLE_PLAY_ICON, GREEN_DOT, HEART_ICON, PRODUCT_ICON, RED_DOT, STAR_ICON, TOGGLE_ICON, ALARM_SVG, DOC_SVG } from '../../assets/assets';
import CustomSVG from '../CustomComponents/CustomSVG';

const RestaurantHome = (props: any) => {
    
    let carousel: any = useRef();
    const renderPaginationDots = (pages: any, activePage: any, onClick: any) => {
        return (
            <div className='dotsRow'>
                {pages.map((itemPage: any) => {
                    const isActivePage = activePage === itemPage;
                    return (
                        <div onClick={() => onClick(itemPage)} className='dots' style={{ backgroundColor: isActivePage ? '#30458c' : '#7c8188' }} />
                    )
                })}
            </div>
        )
    }

    const renderBannerView = () => {
        let bannerData = [1, 1, 1, 1, 1];
        return (
            <Carousel
                enableAutoPlay
                autoPlaySpeed={1500}
                isRTL={false}
                showArrows={false}
                focusOnSelect={false}
                //@ts-ignore
                renderPagination={({ pages, activePage, onClick }) => { return renderPaginationDots(pages, activePage, onClick) }}
                //@ts-ignore
                ref={carousel}>
                {bannerData.map((bannerItem: any) => {
                    return (
                        <div className='bannerContainer'>
                            <img src={BANNER} alt='BANNER' className='bannerImage' />
                            <div className="bannerData">
                                <img onClick={() => carousel.current.slidePrev()} src={BACK_BANNER} alt='BACK_BANNER' className='backwardIcon' />
                                <div className='bannerInternal'>
                                    <h1 className="bannerHeadingH1">50% Off</h1>
                                    <p className="bannerTextP">On your first Order</p>
                                    <button className="orderNowButton">Order Now</button>
                                </div>
                                <img onClick={() => carousel.current.slideNext()} src={FORWARD_BANNER} alt='FORWARD_BANNER' className='forwardIcon' />
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        )
    }

    const renderLeftContainer = () => {
        const menuList = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        return (
            <div className="leftContainer">
                <p className='menuText'>Menu</p>
                <div className="menulist">
                    {menuList.map((item: any) => {
                        return (
                            <p className="menuLabel">Veg Pizza (17)</p>
                        );
                    })}
                </div>
            </div>
        )
    }

    const renderMiddleContainer = () => {
        const productList = [1,1,1,1,1,1];
        return (
            <div className="middleContainer">
                <div className="recommendedRow">
                    <p className="recommendedText">Recommended (85)</p>
                    <div className="rightView">
                        <div className="vegButton">
                            <img src={GREEN_DOT} alt="GREEN_DOT" className="greenDot" />
                            <p className="vegText">VEG</p>
                        </div>
                        <div className="nonVegButton">
                            <img src={RED_DOT} alt="RED_DOT" className="redDot" />
                            <p className="nonVegText">NON-VEG</p>
                        </div>
                        <div className="verticalLines" />
                        <p className="myFavText">My Favorites</p>
                        <img src={TOGGLE_ICON} alt="TOGGLE_ICON" className="toggleIcon" />
                    </div>
                </div>
                {productList.map((item: any) => {
                    return (
                        <div className="cellContainer">
                            <img src={PRODUCT_ICON} alt="PRODUCT_ICON" className="productIcon" />
                            <div className="rightContainerRow">
                                <div className="firstRow">
                                    <div className="dotRow">
                                        <img src={GREEN_DOT} alt="GREEN_DOT" className="greenIcon" />
                                        <div className="starRow">
                                            <p className="ratingText">4.0</p>
                                            <img src={STAR_ICON} alt="STAR_ICON" className="starIcon" />
                                        </div>
                                    </div>
                                    <img src={HEART_ICON} alt="HEART_ICON" className="heartIcon" />
                                </div>
                                <p className="productName">Margherita</p>
                                <p className="productDescription">A Classic delight with 100 %  Real mozzarella..</p>
                                <div className="bottomRow">
                                    <div className="priceRow">
                                        <p className="priceText">£5.0</p>
                                        <p className="cutprice">£10.0</p>
                                        <p className="saveText">Save 50%</p>
                                    </div>
                                    <button className="addCartButton">Add</button>
                                </div>
                            </div>
                        </div>
                    )})}
            </div>
        )
    }
    
    const renderRightContainer = () => {
        return (
            <div className="rightContainer">
                <p className="emptyText">Cart Empty</p>
                <div className="cartContainer">
                    <img src={CART_EMPTY_ICON} alt="CART_EMPTY_ICON" className="cartEmptyIcon" />
                    <p className="cartEmptyText">Cart is empty !</p>
                    <p className="emptyMessage">Order some items from the menu and enjoy meal.</p>
                </div>
                <img src="https://cdn.static-zoutons.com/images/originals/blog/MAIN_BANNER-01_(3)_1609855163.png" alt="COUPON_IMAGE" className="couponImage" />
                <img src="https://cdn.static-zoutons.com/images/originals/blog/BANNER29_12_1609855426.png" alt="COUPON_IMAGE" className="couponImage1" />
            </div>
        )
    }
    
    const renderDownloadContainer = () => {
        return (
            <div className="downloadContainer">
                <img src={BOTTOM_BANNER} alt="BOTTOM_BANNER" className="bottomBanner" />
                <div className="dataContainer">
                    <p className="downloadAppText">Download the App for Free</p>
                    <div className="buttonRow">
                        <img src={GOOGLE_PLAY_ICON} alt="GOOGLE_PLAY_ICON" className="appStoreIcon" />
                        <img src={APP_STORE_ICON} alt="APP_STORE_ICON" className="appStoreIcon" />
                    </div>
                </div>
            </div>
        )
    }
    
    const renderFooterContainer = () => {
        return (
            <div className="footerContainer">
                <div className="leftFooter">
                    <p className="brandText">Studio Store</p>
                    <p className="brandDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="midFooter">
                    <div className="leftColumn">
                        <p className="usefulHeadful">Useful Links</p>
                        <p className="usefulLabel">About Us</p>
                        <p className="usefulLabel">Delivery & Returns</p>
                        <p className="usefulLabel">Site Map</p>
                        <p className="usefulLabel">Contact Us</p>
                    </div>
                    <div className="rightColumn">
                        <p className="usefulHeadful">Quick Links</p>
                        <p className="usefulLabel">Help Center</p>
                        <p className="usefulLabel">FAQ's</p>
                        <p className="usefulLabel">Terms & Conditions</p>
                        <p className="usefulLabel">Privacy Policy</p>
                    </div>
                </div>
                <div className="rightFooter">
                    <p className="promotionsText">Promotions</p>
                    <img src={FOOTER_COUPON_ICON} alt="FOOTER_COUPON_ICON" className="footerCouponIcon" />
                </div>
            </div>
        )
    }

    const renderMidView = () => {
        return (
            <div className="midContainer">
                {renderLeftContainer()}
                {renderMiddleContainer()}
                {renderRightContainer()}
                {renderDownloadContainer()}
            </div>
        )
    }

    const renderCopyrightContainer = () => {
        return (
            <div className="copyrightContainer">
                <p className="copyrightText">Copyright © 2020 Studio Store, USA. All rights reserved.</p>
            </div>
        )
    }

    const renderSVGComponents = () => {
        return (
            <>
                <CustomSVG component={<ALARM_SVG />} />
                <CustomSVG component={<DOC_SVG />} />
                <ALARM_SVG width="100px" height="100px" />
                <DOC_SVG width="100px" height="100px" />
            </>
        )
    }

    return (
        <div className='mainContainer'>
            <RestaurantNav  {...props}/>
            {renderBannerView()}
            {renderMidView()}
            {renderFooterContainer()}
            {renderCopyrightContainer()}
        </div>
    )
};

export default RestaurantHome;
