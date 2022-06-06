/**
 *
 PARKING HOME TEST FILE
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper, configure, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ParkingHome } from '../ParkingHome';

configure({ adapter: new Adapter() });


const screenProps = {
    navigate: jest.fn(),
    id: 'ParkingHome',
    updateParkingData: jest.fn()
}

describe('Launching ParkingHome', () => {

    beforeEach(() => {
        global.fetch = jest.fn()
    })

    it('ParkingHome root file loads properly', () => {
        const tree: any = renderer.create(<ParkingHome {...screenProps} />).toJSON();
        expect(tree.children.length).toBe(1);
        expect(tree).toMatchSnapshot();
    });

    it('Test User ParkingHome Screen', () => {
        let wrapper: ShallowWrapper;
        let instance: ParkingHome;
        wrapper = shallow(<ParkingHome {...screenProps} />)
        instance = wrapper.instance() as ParkingHome;
        let inputComponent = wrapper.findWhere((node) => node.prop("data-testid") === "textInputTestID");
        inputComponent.simulate('change', { preventDefault: jest.fn(), target: { value: 'ind' } });
        let buttonComponent = wrapper.findWhere((node) => node.prop("data-testid") === "submitButtonTestID");
        buttonComponent.simulate("click");
        instance.componentWillUnmount();
    });
});