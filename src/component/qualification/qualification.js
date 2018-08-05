import React from 'react';

import BoxQualification from '../boxQualification/boxQualification';

import axios from 'axios';

import './styled.css';

class Qualification extends React.Component { 
    constructor() {
        super();

        this.state = {
            qualifications: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/qualification")
            .then(res => this.setState({ qualifications: res.data }))
            .catch(err=>console.log(err))
    }

    render() {
        return (
            <div className="qualification">
                {this.state.qualifications.map(i => <BoxQualification qualifications={i} />)}
            </div>
        )
    }
}




export default Qualification;