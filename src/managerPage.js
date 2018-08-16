import React from 'react';
import axios from 'axios';


class ManagerPage extends React.Component {
    constructor() {
        super();

        this.state = {
            product: '',
            name: '',
            message: ''
        }
    }
    
    handleName = (name) => {
        this.setState({name: name.target.value})
    }

    handleProduct = (product) => {
        this.setState({product: product.target.value})
    }

    handleInsertItems = () => {
        const { name, product } = this.state;

        axios.post('/api/post', { name: name, product: product })
            .then(response => this.setState({message: response.data}))
            .catch(error => this.setState({ message: error.response.data }))
    }

    render() {
        return (
            <div>
                <input placeholder="Insert your name" onChange={this.handleName} />
                <input placeholder="Insert your product" onChange={this.handleProduct} />
                <button onClick={this.handleInsertItems}> Inserir </button>
                <h3> {this.state.message} </h3>
            </div>
        )
    }
}

export default ManagerPage;