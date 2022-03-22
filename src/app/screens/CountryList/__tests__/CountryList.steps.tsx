import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CountryList } from "../CountryList";

configure({adapter: new Adapter()});

const screenProps = {
    navigate: jest.fn(),
    location: {
        state: {
            countryList: []
        }
    },
    id: "CountryList"
}

const feature = loadFeature('./src/app/screens/CountryList/__tests__/features/CountryList-scenarios.feature');

defineFeature(feature, (test) => {

    test('User navigates Country List Screen', ({ given, when, then }) => {
        let CountryListScreenWrapper: ShallowWrapper;
        let CountryListScreenInstance: CountryList;

        given('I am a User loading Country List Screen', () => {
            CountryListScreenWrapper = shallow(<CountryList {...screenProps} />)
        });

        when('I navigate to the Country List Screen', () => {
            CountryListScreenInstance = CountryListScreenWrapper.instance() as CountryList
        });

        then('Country List Screen will load with out errors', () => {
            CountryListScreenInstance.componentDidMount();
            expect(CountryListScreenWrapper).toBeTruthy()
            expect(CountryListScreenWrapper).toMatchSnapshot()
        });

        then('I can leave the screen with out errors', () => {
            CountryListScreenInstance.componentWillUnmount();
            expect(CountryListScreenWrapper).toBeTruthy()
            expect(CountryListScreenWrapper).toMatchSnapshot()
        });
    });

});
