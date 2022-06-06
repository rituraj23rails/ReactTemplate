/**
 *
 PARKING HOME TEST FILE
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper, configure, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ParkingCharges } from '../ParkingCharges';

configure({ adapter: new Adapter() });


const screenProps = {
    navigate: jest.fn(),
    id: 'ParkingCharges',
    parkingData: [{
        isAvailable: false,
        carRegistrationNo: '111',
        uniqueNo: 1
    }],
    location: {
        state: {
            slotData: {
                isAvailable: false,
                carRegistrationNo: '111',
                uniqueNo: 1,
                time: 1
            }
        }
    },
    updateParkingData: jest.fn()
}

describe('Launching ParkingCharges', () => {
    
    beforeEach(() => {
        global.fetch = jest.fn()
        window.alert = jest.fn();
    })

    it('ParkingCharges root file loads properly', () => {
        const tree: any = renderer.create(<ParkingCharges {...screenProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Test User ParkingCharges Empty Data Screen', () => {
        let wrapper: ShallowWrapper;
        let instance: ParkingCharges;
        wrapper = shallow(<ParkingCharges {...screenProps} />)
        instance = wrapper.instance() as ParkingCharges;
        let buttonComponent = wrapper.findWhere((node) => node.prop("data-testid") === "submitButtonTestID");
        buttonComponent.simulate("click");
        instance.componentWillUnmount();
    });
});