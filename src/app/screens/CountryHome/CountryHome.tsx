import React, { Component, useRef } from 'react';
import './CountryHome.css';
import WithRouter from '../../../WithRouter';

export interface Props {
    navigate: any;
    id: string;
}

interface S {
    countryName: any;
    countryList: any;
}

interface SS {
    id: any;
}

class CountryHome extends Component<Props, S, SS> {
    carousel: any = null;
    constructor(props: any) {
        super(props);
        this.state = {
            countryName: '',
            countryList: []
        };
    };

    componentDidMount = async () => {
    }

    componentWillUnmount = () => {

    }

    handleChangeTextInput = (event: any) => {
        event?.preventDefault();
        this.setState({ countryName: event.target.value });
    }

    onSubmitButton = async () => {
        try {
            let response = await fetch(`https://restcountries.com/v3.1/name/${this.state.countryName}`);
            let json = await response.json();
            this.setState({ countryList: json }, () => {
                console.log("@@@ Country List Data ==============", this.state.countryList)
                if (json.status === 404) {
                    alert('No Data found.');
                    return;
                }
                this.props.navigate(`/countrylist`, { state: { countryList: this.state.countryList }});
            });
        } catch (error) {
            alert(error)
        }
    }

    renderInputCountryForm = () => {
        return (
            <div className="formBox">
                <p className="headingText">Welcome To Country App</p>
                <input data-testid="textInputTestID" type="text" className='textInputField' value={this.state.countryName} onChange={(event) => this.handleChangeTextInput(event)} />
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

export default WithRouter(CountryHome);
export {CountryHome};
