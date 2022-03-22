import React, { Component, useRef } from 'react';
import './CountryDetails.css';
import WithRouter from '../../../WithRouter';

export interface Props {
    navigate: any;
    location: any;
    id: string;
}

interface S {
    weatherData: any;
    showData: any;
}

interface SS {
    id: any;
}

class CountryDetails extends Component<Props, S, SS> {
    carousel: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            weatherData: null,
            showData: false,
        };
    };

    componentDidMount = async () => {
        console.log('@@@ Params =========', this.props.location.state.countryData)
    }

    componentWillUnmount = () => {

    }

    onCalculateCapitalWeather = async () => {
        const { capital } = this.props.location.state.countryData;
        let cap = capital[0];
        try {
            let response = await fetch(
                `http://api.weatherstack.com/current?access_key=e32b270172beca34f23673646d8a9b0d&query=${cap}`,
            );

            let json = await response.json();
            this.setState({ weatherData: json.current }, () => {
                this.setState({ showData: true });
                console.log('@@@ Weather DATA JSON ============', this.state.weatherData);
            })
        } catch (error) {
            console.log('@@@ Error Weather Data =========', error);
        }
    }

    renderCountryDetails = () => {
        const { name, capital, population, latlng = ['0', '0'], flags } = this.props.location.state.countryData;
        return (
            <div className="countryDetail">
                <p className="countryDetailText">Country Details</p>
                <div className="countryDetailCell">
                    <img src={flags?.svg} className="flagIcon" />
                    <div>
                        <p className="dataValue">Country: {name?.common}</p>
                        {capital && <p className="dataValue">Capital: {capital[0] ? capital[0] : ''}</p>}
                        <p className="dataValue">Population: {population}</p>
                        <p className="dataValue">Latlng: {latlng[0]} {latlng[1]}</p>
                    </div>
                </div>
                <button onClick={() => this.onCalculateCapitalWeather()} className="weatherButton">Capital Weather</button>
            </div>
        )
    }

    renderWeatherData = () => {
        const { wind_speed, temperature, precip, weather_icons, pressure } = this.state.weatherData;
        return (
            <div className="weatherContainer">
                <div>
                    <p className="dataValue">Temperature: {temperature}</p>
                    <p className="dataValue">PRECIP: {precip}</p>
                    <p className="dataValue">Wind Speed: {wind_speed}</p>
                </div>
                <img src={weather_icons[0]} className="weatherIcon" />
            </div>
        )
    }

    render() {
        return (
            <div className='countryDetailsMainContainer'>
                {this.renderCountryDetails()}
                {this.state.showData && this.renderWeatherData()}
            </div>
        )
    }
};

export default WithRouter(CountryDetails);
export {CountryDetails};