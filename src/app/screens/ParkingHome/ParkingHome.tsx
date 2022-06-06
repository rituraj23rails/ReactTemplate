import React, { Component, useRef } from 'react';
import './ParkingHome.css';
import WithRouter from '../../../WithRouter';
import { connect } from 'react-redux';
import { updateParkingData } from '../ParkingSlots/ParkingSlice';

export interface Props {
    navigate: any;
    id: string;
    updateParkingData: (parkingData: any) => void;
}

interface S {
    parkingSlots: any;
}

interface SS {
    id: any;
}

class ParkingHome extends Component<Props, S, SS> {
    carousel: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            parkingSlots: '',
        };
    };

    componentDidMount = async () => {
        this.props.updateParkingData([]);
    }

    componentWillUnmount = () => {

    }

    handleChangeTextInput = (event: any) => {
        event?.preventDefault();
        this.setState({ parkingSlots: event.target.value });
    }

    onSubmitButton = async () => {
        this.props.navigate(`/parkingSlots`, { state: { parkingSlots: this.state.parkingSlots }});
    }

    renderInputCountryForm = () => {
        return (
            <div className="formBox">
                <p className="headingText">Welcome To Parking App</p>
                <input data-testid="textInputTestID" type="text" placeholder='Enter No of Slots' className='textInputField' value={this.state.parkingSlots} onChange={(event) => this.handleChangeTextInput(event)} />
                <button data-testid="submitButtonTestID" onClick={() => this.onSubmitButton()} className="submitButton">SUBMIT</button>
            </div>
        )
    }

    render() {
        return (
            <div className='mainContainer'>
                {this.renderInputCountryForm()}
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

export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(ParkingHome));
export {ParkingHome};
