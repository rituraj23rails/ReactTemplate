import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RestaurantHome from "../RestaurantHome";

configure({adapter: new Adapter()});

const screenProps = {
    navigation: {
        navigate: jest.fn(),
    },
    id: "RestaurantHome"
}

const feature = loadFeature('./src/app/screens/RestaurantHome/__tests__/features/RestaurantHome-scenarios.feature');

defineFeature(feature, (test) => {

    test('User navigates Restaurant Home Screen', ({ given, when, then }) => {
        let RestaurantHomeScreenWrapper: ShallowWrapper;
        let RestaurantHomeScreenInstance: RestaurantHome;

        given('I am a User loading Restaurant Home Screen', () => {
            RestaurantHomeScreenWrapper = shallow(<RestaurantHome {...screenProps} />)
        });

        when('I navigate to the Restaurant Home Screen', () => {
            RestaurantHomeScreenInstance = RestaurantHomeScreenWrapper.instance() as RestaurantHome
        });

        then('Restaurant Home Screen will load with out errors', () => {
            RestaurantHomeScreenInstance.componentDidMount();
            expect(RestaurantHomeScreenWrapper).toBeTruthy()
            expect(RestaurantHomeScreenWrapper).toMatchSnapshot()
        });

        then('I can leave the screen with out errors', () => {
            RestaurantHomeScreenInstance.componentWillUnmount();
            expect(RestaurantHomeScreenWrapper).toBeTruthy()
            expect(RestaurantHomeScreenWrapper).toMatchSnapshot()
        });
    });

});
