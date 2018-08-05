import React from 'react';
import './styled.css';

import Box from '../box/box';

import { Link  } from "react-router-dom";
import axios from 'axios';

import ButtonViewMore from '../../component/buttonViewMore/buttonViewMore';

class BoxItemCardapio extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/menu")
            .then(res =>
                this.setState({ items: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="boxItemCardapio">
                <div className="itemBox">
                    {this.state.items.map(i => <div className="itemMap"> <Box item={i.item} preco={i.price} image={i.image} /> <Link to={`cardapio/${i.id}`}><ButtonViewMore label="VER MAIS"/></Link> </div>)}
                </div>
            </div>
        )
    }
}
export default BoxItemCardapio;