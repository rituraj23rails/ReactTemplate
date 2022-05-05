import React, { Component, useRef } from 'react';
import './ComponentJson.css';
import WithRouter from '../../../WithRouter';

export interface Props {
    navigate: any;
    id: string;
    location: any;
}

interface S {
}

interface SS {
    id: any;
}

class ComponentJson extends Component<Props, S, SS> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    };

    componentDidMount = async () => {
        console.log('@@@ =======', this.props.location.state.rawData);
    }

    componentWillUnmount = () => {

    }

    render() {
        return (
            <div className='jsonContainer'>
                <p className="rawData">{JSON.stringify(this.props.location.state.rawData)}</p>
            </div>
        )
    }
};

export default WithRouter(ComponentJson);
export { ComponentJson };
