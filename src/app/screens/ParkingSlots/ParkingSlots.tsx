import React, { Component, useRef } from 'react';
import './ParkingSlots.css';
import WithRouter from '../../../WithRouter';
import { connect } from 'react-redux';
import { updateParkingData } from './ParkingSlice';

export interface Props {
    navigate:  any;
    id: string;
    parkingData: Array<any>;
    location: any;
    updateParkingData: (parkingData: any) => void;
}

interface S {
    parkingSlots: string;
    parkingData: Array<any>;
    carRegistrationNo: string;
}

interface SS {
    id: any;
}

class ParkingSlots extends Component<Props, S, SS> {
    carousel: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            parkingSlots: this.props.location.state.parkingSlots,
            parkingData: [],
            carRegistrationNo: ''
        };
    };

    componentDidMount = () => {
        if(this.props.parkingData && this.props.parkingData.length === 0) {
            let parkingData: Array<any> = [];
            for(let i = 0; i < Number(this.state.parkingSlots); i++) {
                parkingData.push({
                    isAvailable: true,
                    carRegistrationNo: '',
                    uniqueNo: i
                })
            }
            this.setState({ parkingData: parkingData }, () => {
            });
        } else {
            this.setState({ parkingData: this.props.parkingData });
        }
    }

    componentWillUnmount = () => {

    }

    carRegistration = () => {
        if (this.state.carRegistrationNo.trim().length === 0) {
            alert('Car Registration No is empty.');
            return;
        }
        let availableParkingArea = this.state.parkingData;
        let availableRegistrationIndex = availableParkingArea.findIndex((item: any) => item.carRegistrationNo.toLowerCase() === this.state.carRegistrationNo.toLowerCase());
        if(availableRegistrationIndex !== -1) {
            alert('Already Car Registered with this No.');
            return;
        }
        let availableIndex = availableParkingArea.findIndex((item: any) => item.isAvailable === true);
        if (availableIndex === -1) {
            alert('Parking is full.');
            return;
        }
        let availableIndexes: any = [];
        availableParkingArea.map((item: any, index: any) => {
            if (item.isAvailable) {
                availableIndexes.push(index);
            }
        });
        let randomIndex = Math.floor((Math.random() * availableIndexes.length));
        availableParkingArea[availableIndexes[randomIndex]].isAvailable = false;
        availableParkingArea[availableIndexes[randomIndex]].carRegistrationNo = this.state.carRegistrationNo;
        availableParkingArea[availableIndexes[randomIndex]].time = new Date().getTime();
        this.setState({ parkingData: availableParkingArea, carRegistrationNo: '' }, () => {
            this.props.updateParkingData(JSON.parse(JSON.stringify(this.state.parkingData)));
            alert('Car Registered Successfully');
        });
    }

    handleChangeTextInput = (event: any) => {
        event?.preventDefault();
        this.setState({ carRegistrationNo: event.target.value });
    }

    onPressSlot = (item: any) => {
        this.props.navigate(`/parkingCharges`, { state: { slotData: item }});
    }

    renderSlotsList = () => {
        return (
            <div className="listContainer">
                {this.state.parkingData.map((item: any, index: any) => {
                    return (
                        <div data-testid="cellButtonTestID" onClick={() => !item.isAvailable && this.onPressSlot(item)} key={index} className="slotCell" style={{ backgroundColor: item.isAvailable ? 'green' : 'red' }}>
                            <p className="availableText">{item.isAvailable ? 'Available' : 'Not Available'}</p>
                            <p className="regisrationTextNo">{item.carRegistrationNo}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div className='slotMainContainer'>
                {this.renderSlotsList()}
                <input data-testid="textInputTestID" type="text" placeholder='Enter Car Registration No' className='textCarInputField' value={this.state.carRegistrationNo} onChange={(event) => this.handleChangeTextInput(event)} />
                <button data-testid="submitButtonTestID" onClick={() => this.carRegistration()} className="submitCarButton">CAR REGISTRATION</button>
            </div>
        )
    }
};

const mapStateToProps = (state: any) => ({
    parkingData: state.parking.parkingData
});

const mapDispatchToProps = {
    updateParkingData: updateParkingData
};

export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(ParkingSlots));
export {ParkingSlots};
