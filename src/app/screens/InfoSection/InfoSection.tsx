import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkSroll } from 'react-scroll';
import './InfoSection.css';

const InfoSection = (props: any) => {
    return (
        <>
            <div className={props.lightBg ? 'infoContainerLight' : 'infoContainer'} id={props.id}>
                <div className='infoWrapper'>
                    <div className={props.imgStart ? 'infoRowStart' : 'infoRow'}>
                        <div className='column1'>
                            <div className='textWrapper'>
                                <p className='topLine'>{props.topLine}</p>
                                <h1 className={props.lightText ? 'headingLight' : 'heading'}>{props.headline}</h1>
                                <p className={props.darkText ? 'subtitleDark' : 'subtitle'}>{props.description}</p>
                                <div className='btnWrap'>
                                    <LinkSroll to='home' smooth={true} duration={500} spy={true} offset={-80} className={props.darkText ? 'signupButtonDark' : 'signupButton'}>{props.buttonLabel}</LinkSroll>
                                </div>
                            </div>
                        </div>
                        <div className='column2'>
                            <div className='imgWrap'>
                                <img className='imgWrap' src={props.img} alt={props.alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoSection;
