import React, { Component, useRef } from 'react';
import './CountryList.css';
import WithRouter from '../../../WithRouter';

export interface Props {
    navigate: any;
    location: any;
    id: string;
}

interface S {
    countryData: any;
}

interface SS {
    id: any;
}

class CountryList extends Component<Props, S, SS> {
    carousel: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            countryData: this.props.location.state.countryList,
        };
    };

    componentDidMount = async () => {
        console.log('@@@ Params =========', this.props.location.state.countryList)
    }

    componentWillUnmount = () => {

    }

    handleChangeTextInput = (event: any) => {
        event.preventDefault();
    }

    onPressCountryDetails = (item: any) => {
        this.props.navigate('/countrydetails', { state: { countryData: item }});
    }

    renderCountryList = () => {
        return (
            <div className="countryContainer">
                <p className="searchedCountryText">Searched Country List</p>
                <div className="countryList">
                    {this.state.countryData.map((item: any, index: any) => {
                        if(!item)
                        return;
                        return (
                            <div onClick={() => this.onPressCountryDetails(item)} className="countryCell" key={index}>
                                <div>
                                    <p className="fieldValue">Country: {item?.name?.common}</p>
                                    {item?.capital && <p className="fieldValue">Capital: {item?.capital[0] ? item?.capital[0] : ''}</p>}
                                    <p className="fieldValue">Population: {item?.population}</p>
                                    <p className="fieldValue">Latlng: {item?.latlng[0]} {item?.latlng[1]}</p>
                                </div>
                                <img src={item.flags.svg} className="flagImage" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='countryListMainContainer'>
                {this.renderCountryList()}
            </div>
        )
    }
};

export default WithRouter(CountryList);
export {CountryList};