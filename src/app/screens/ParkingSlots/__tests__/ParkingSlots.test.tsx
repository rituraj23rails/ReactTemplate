/**
 *
 PARKING HOME TEST FILE
 * @format
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper, configure, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ParkingSlots } from '../ParkingSlots';

configure({ adapter: new Adapter() });


const screenProps = {
    navigate: jest.fn(),
    id: 'ParkingSlots',
    parkingData: [],
    location: {
        state: {
            parkingSlots: 2
        }
    },
    updateParkingData: jest.fn()
}

const screenProps1 = {
    navigate: jest.fn(),
    id: 'ParkingSlots',
    parkingData: [{
        isAvailable: true,
        carRegistrationNo: '123',
        uniqueNo: 1
    }],
    location: {
        state: {
            parkingSlots: 0
        }
    },
    updateParkingData: jest.fn()
}

const screenProps2 = {
    navigate: jest.fn(),
    id: 'ParkingSlots',
    parkingData: [],
    location: {
        state: {
            parkingSlots: 0
        }
    },
    updateParkingData: jest.fn()
}

const screenProps3 = {
    navigate: jest.fn(),
    id: 'ParkingSlots',
    parkingData: [{
        isAvailable: false,
        carRegistrationNo: '111',
        uniqueNo: 1
    }],
    location: {
        state: {
            parkingSlots: 0
        }
    },
    updateParkingData: jest.fn()
}

const screenProps4 = {
    navigate: jest.fn(),
    id: 'ParkingSlots',
    parkingData: [{
        isAvailable: true,
        carRegistrationNo: '',
        uniqueNo: 3
    }],
    location: {
        state: {
            parkingSlots: 0
        }
    },
    updateParkingData: jest.fn()
}

describe('Launching ParkingSlots', () => {
    
    beforeEach(() => {
        global.fetch = jest.fn()
        window.alert = jest.fn();
    })

    it('ParkingSlots root file loads properly', () => {
        const tree: any = renderer.create(<ParkingSlots {...screenProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Test User ParkingSlots Empty Data Screen', () => {
        let wrapper: ShallowWrapper;
        let instance: ParkingSlots;
        wrapper = shallow(<ParkingSlots {...screenProps} />)
        instance = wrapper.instance() as ParkingSlots;
        let inputComponent = wrapper.findWhere((node) => node.prop("data-testid") === "textInputTestID");
        inputComponent.simulate('change', { preventDefault: jest.fn(), target: { value: 'ind' } });
        let buttonComponent = wrapper.findWhere((node) => node.prop("data-testid") === "submitButtonTestID");
        buttonComponent.simulate("click");
        instance.componentWillUnmount();
    });

    it('Test User ParkingSlots Data Screen', () => {
        let wrapper: ShallowWrapper;
        let instance: ParkingSlots;
        wrapper = shallow(<ParkingSlots {...screenProps1} />)
        instance = wrapper.instance() as ParkingSlots;
        instance.setState({ carRegistrationNo: '' }, () => {
            instance.carRegistration();
        })
        instance.setState({ carRegistrationNo: '123' }, () => {
            instance.carRegistration();
        })
        instance.componentWillUnmount();
    });

    it('Test User ParkingSlots non empty parking Slot', () => {
        let wrapper: ShallowWrapper;
        let instance: ParkingSlots;
        wrapper = shallow(<ParkingSlots {...screenProps2} />)
        instance = wrapper.instance() as ParkingSlots;
        instance.setState({ carRegistrationNo: '233' }, () => {
            instance.carRegistration();
        })
        instance.componentWillUnmount();
    });

    it('Test User ParkingSlots Cell', () => {
        let wrapper: ShallowWrapper;
        let instance: ParkingSlots;
        wrapper = shallow(<ParkingSlots {...screenProps3} />)
        instance = wrapper.instance() as ParkingSlots;
        instance.state.parkingData.forEach((item:any) => {
            let buttonComponent = wrapper.findWhere((node) => node.prop("data-testid") === "cellButtonTestID");
            buttonComponent.simulate("click");
        })
        instance.carRegistration();
        instance.componentWillUnmount();
    });

    it('Test User Available ParkingSlots Cell', () => {
        let wrapper: ShallowWrapper;
        let instance: ParkingSlots;
        wrapper = shallow(<ParkingSlots {...screenProps4} />)
        instance = wrapper.instance() as ParkingSlots;
        instance.setState({ carRegistrationNo: '233' }, () => {
            instance.carRegistration();
        })
        instance.componentWillUnmount();
    });
});