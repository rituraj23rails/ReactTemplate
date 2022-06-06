import React, { Component, useRef } from 'react';
import './ParkingCharges.css';
import WithRouter from '../../../WithRouter';
import { connect } from 'react-redux';
import { updateParkingData } from '../ParkingSlots/ParkingSlice';

export interface Props {
    navigate:  any;
    id: string;
    location: any;
    updateParkingData: (parkingData: any) => void;
    parkingData: Array<any>;
}

interface S {
    slotData: any;
    totalHrs: number;
    totalCharges: number;
}

interface SS {
    id: any;
}

class ParkingCharges extends Component<Props, S, SS> {
    carousel: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            slotData: this.props.location.state.slotData,
            totalCharges: 0,
            totalHrs: 0,
        };
    };

    componentDidMount = () => {
        let slotData = this.state.slotData;
        let currentTime = new Date().getTime();
        let totalHrs = Math.abs(Math.floor((currentTime - slotData.time)/(1000 * 60*60)));
        let totalCharges = 0;
        if(totalHrs <= 2) {
            totalCharges = 10;
        } else {
            totalCharges = 10 + 10 * (totalHrs - 2);
        }
        this.setState({ totalHrs: totalHrs, totalCharges: totalCharges });
    }

    componentWillUnmount = () => {

    }


    onExitCarRegistration = () => {
        let availableParkingArea = JSON.parse(JSON.stringify(this.props.parkingData));
        let availableIndex = availableParkingArea.findIndex((carItem: any) => carItem.uniqueNo === this.state.slotData.uniqueNo);
        availableParkingArea[availableIndex]['isAvailable'] = true;
        this.props.updateParkingData(availableParkingArea);
        alert('Payment Done.')
        this.props.navigate(-1);
    }

    render() {
        return (
            <div className='chargesMainContainer'>
                <p className="regisrationText">Car Registration No: {this.state.slotData.carRegistrationNo}</p>
                <p className="regisrationText">Total Time: {this.state.totalHrs} hrs.</p>
                <p className="regisrationText">Total Charges: ${this.state.totalCharges}</p>
                <button data-testid="submitButtonTestID" onClick={() => this.onExitCarRegistration()} className="submitButton">DEALLOCATE CAR</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(ParkingCharges));
export {ParkingCharges};
