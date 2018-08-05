import React from 'react';
import './styled.css';

import Box from '../box/box';
import axios from 'axios';

class ContainerHome extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            itemsFiltered: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/menu")
            .then(res =>
                this.setState({ items: res.data.slice(0,3) }))
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className="containerHome">
                <div className="itemBox">
                {this.state.items.map(i => <Box item={i.item} preco={i.price} image={i.image} />)}
            </div>
        </div>
        )
    }
}
    
export default ContainerHome;