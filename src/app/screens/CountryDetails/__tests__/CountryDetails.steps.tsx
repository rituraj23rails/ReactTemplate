import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CountryDetails } from "../CountryDetails";

configure({adapter: new Adapter()});

const screenProps = {
    navigate: jest.fn(),
    location: {
        state: {
            countryData: {
                name: '',
                capital: ['a'],
                population: 1,
                latlng: ['0', '0'],
                flags: {
                    svg: ''
                }
            }
        }
    },
    id: "CountryDetails"
}

const feature = loadFeature('./src/app/screens/CountryDetails/__tests__/features/CountryDetails-scenarios.feature');

const weatherData = { 
    wind_speed: '',
    temperature: '',
    precip: '',
    weather_icons: ['']
}

defineFeature(feature, (test) => {

    test('User navigates Country Details Screen', ({ given, when, then }) => {
        let CountryDetailsScreenWrapper: ShallowWrapper;
        let CountryDetailsScreenInstance: CountryDetails;

        given('I am a User loading Country Details Screen', () => {
            CountryDetailsScreenWrapper = shallow(<CountryDetails {...screenProps} />)
        });

        when('I navigate to the Country Details Screen', () => {
            CountryDetailsScreenInstance = CountryDetailsScreenWrapper.instance() as CountryDetails
        });

        then('Country Details Screen will load with out errors', () => {
            CountryDetailsScreenInstance.componentDidMount();
            CountryDetailsScreenInstance.onCalculateCapitalWeather();
            CountryDetailsScreenInstance.renderCountryDetails();
            CountryDetailsScreenInstance.setState({ weatherData: weatherData });
            CountryDetailsScreenInstance.renderWeatherData();
            expect(CountryDetailsScreenWrapper).toBeTruthy()
            expect(CountryDetailsScreenWrapper).toMatchSnapshot()
        });

        then('I can select the capital button', () => {
            let buttonComponent = CountryDetailsScreenWrapper.findWhere((node) => node.prop("data-testid") === "capitalButtonTestID");
            buttonComponent.simulate("click");
        });

        then('I can leave the screen with out errors', () => {
            CountryDetailsScreenInstance.componentWillUnmount();
            expect(CountryDetailsScreenWrapper).toBeTruthy()
            expect(CountryDetailsScreenWrapper).toMatchSnapshot()
        });
    });

});
