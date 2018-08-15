import React from 'react';

import './styled.css';

import axios from 'axios';

class BoxItemCardapioSelected extends React.Component {
    constructor() {
        super();

        this.state = {
            item: {}
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/menu/${this.props.id}`)
            .then(res =>
                this.setState({ item: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.items)
        return (
            <div className="boxSelected">
                <div>
                    <img className="item img" src={this.state.item.image} />
                </div>
                <div>
                    <div className="item">{this.state.item.item}</div>
                    <div className="item"> PREÇO: {this.state.item.price}</div>
                    <div className="item"> INGREDIENTES: {this.state.item.description}</div>
                </div>
            </div>
        )
    }
}


export default BoxItemCardapioSelected;
