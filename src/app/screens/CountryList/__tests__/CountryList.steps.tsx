import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, mount, ShallowWrapper, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { CountryList } from "../CountryList";
import WareHouse  from '../WareHouse';
import { handleChange, onAccessSelectionChange } from '../WareHouse';

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
        let CountryListScreenWrapper1: ShallowWrapper;
        let CountryListScreenInstance: CountryList;

        given('I am a User loading Country List Screen', () => {
            CountryListScreenWrapper = shallow(<CountryList {...screenProps} />)
            CountryListScreenWrapper1 = shallow(<WareHouse />)
        });

        when('I navigate to the Country List Screen', () => {
            CountryListScreenInstance = CountryListScreenWrapper.instance() as CountryList
        });

        then('Country List Screen will load with out errors', () => {
            CountryListScreenInstance.componentDidMount();
            expect(CountryListScreenWrapper).toBeTruthy()
            expect(CountryListScreenWrapper).toMatchSnapshot()
            const wrapper = mount(<WareHouse />);
            expect(wrapper).toMatchSnapshot();
            const addButton = wrapper.find('span').at(0);
            addButton.simulate('click')
            handleChange({},  { label: 'View actvity', value: false });
            onAccessSelectionChange({ target: { value: ''}})
        });

        then('I can leave the screen with out errors', () => {
            CountryListScreenInstance.componentWillUnmount();
            expect(CountryListScreenWrapper).toBeTruthy()
            expect(CountryListScreenWrapper).toMatchSnapshot()
        });
    });

});
