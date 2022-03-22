import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CountryHome } from "../CountryHome";

configure({adapter: new Adapter()});

const screenProps = {
    navigate: jest.fn(),
    id: "CountryHome"
}

const feature = loadFeature('./src/app/screens/CountryHome/__tests__/features/CountryHome-scenarios.feature');

defineFeature(feature, (test) => {

    test('User navigates Country Home Screen', ({ given, when, then }) => {
        let CountryHomeScreenWrapper: ShallowWrapper;
        let CountryHomeScreenInstance: CountryHome;

        given('I am a User loading Country Home Screen', () => {
            CountryHomeScreenWrapper = shallow(<CountryHome {...screenProps} />)
        });

        when('I navigate to the Country Home Screen', () => {
            CountryHomeScreenInstance = CountryHomeScreenWrapper.instance() as CountryHome
        });

        then('Country Home Screen will load with out errors', () => {
            CountryHomeScreenInstance.componentDidMount();
            expect(CountryHomeScreenWrapper).toBeTruthy()
            expect(CountryHomeScreenWrapper).toMatchSnapshot()
        });

        then('I can enter search input value for countries', () => {
            let inputComponent = CountryHomeScreenWrapper.findWhere((node) => node.prop("data-testid") === "textInputTestID");
            inputComponent.simulate('change', { preventDefault: jest.fn(), target: { value: 'ind' } });
        });
        
        then('I can select the submit button to search the countries', () => {
            let buttonComponent = CountryHomeScreenWrapper.findWhere((node) => node.prop("data-testid") === "submitButtonTestID");
            buttonComponent.simulate("click");
        });

        then('I can leave the screen with out errors', () => {
            CountryHomeScreenInstance.componentWillUnmount();
            expect(CountryHomeScreenWrapper).toBeTruthy()
            expect(CountryHomeScreenWrapper).toMatchSnapshot()
        });
    });

});
