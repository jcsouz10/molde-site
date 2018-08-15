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
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="qualification">
                <div> <img className="imgHomeRecomendation1" src="https://uploaddeimagens.com.br/images/001/545/726/original/recomenda%C3%A7%C3%B5es.png?1533431367" /></div>
                <div className="div"> {this.state.qualifications.map(i => <BoxQualification qualifications={i} />)} </div>
            </div>
        )
    }
}




export default Qualification;