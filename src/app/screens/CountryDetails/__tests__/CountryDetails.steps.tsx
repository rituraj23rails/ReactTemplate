import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CountryDetails } from "../CountryDetails";

configure({adapter: new Adapter()});

const screenProps = {
    navigate: jest.fn(),
    location: {
        state: {
            countryData: []
        }
    },
    id: "CountryDetails"
}

const feature = loadFeature('./src/app/screens/CountryDetails/__tests__/features/CountryDetails-scenarios.feature');

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
            expect(CountryDetailsScreenWrapper).toBeTruthy()
            expect(CountryDetailsScreenWrapper).toMatchSnapshot()
        });

        then('I can leave the screen with out errors', () => {
            CountryDetailsScreenInstance.componentWillUnmount();
            expect(CountryDetailsScreenWrapper).toBeTruthy()
            expect(CountryDetailsScreenWrapper).toMatchSnapshot()
        });
    });

});
