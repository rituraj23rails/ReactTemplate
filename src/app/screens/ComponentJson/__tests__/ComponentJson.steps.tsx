import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ComponentJson } from "../ComponentJson";

configure({adapter: new Adapter()});

const screenProps = {
    navigate: jest.fn(),
    location: {
        state: {
            params: ''
        }
    },
    id: "ComponentJson",
}

const feature = loadFeature('./src/app/screens/ComponentJson/__tests__/features/ComponentJson-scenarios.feature');

defineFeature(feature, (test) => {

    test('User navigates Component JSON Screen', ({ given, when, then }) => {
        let ComponentJsonScreenWrapper: ShallowWrapper;
        let ComponentJsonScreenInstance: ComponentJson;

        given('I am a User loading Component JSON Screen', () => {
            ComponentJsonScreenWrapper = shallow(<ComponentJson {...screenProps} />)
        });

        when('I navigate to the Component JSON Screen', () => {
            ComponentJsonScreenInstance = ComponentJsonScreenWrapper.instance() as ComponentJson
        });

        then('Component JSON Screen will load with out errors', () => {
            ComponentJsonScreenInstance.componentDidMount();
            expect(ComponentJsonScreenWrapper).toBeTruthy()
            expect(ComponentJsonScreenWrapper).toMatchSnapshot()
        });

        then('I can leave the screen with out errors', () => {
            ComponentJsonScreenInstance.componentWillUnmount();
            expect(ComponentJsonScreenWrapper).toBeTruthy()
            expect(ComponentJsonScreenWrapper).toMatchSnapshot()
        });
    });

});
