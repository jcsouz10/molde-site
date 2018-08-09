import React, { Fragment } from 'react';

import Footer from '../../component/footer/footer.js';
import Header from '../../component/navbar/navbar.js';
import Main from '../../component/main/Main.js';
import ButtonViewMore from '../../component/buttonViewMore/buttonViewMore';
import Box from '../../component/box/box';

import { Link  } from "react-router-dom";
import axios from 'axios';

import { Title } from '../styled.js';
import { ContainerCardapio, ContainerItemCardapio } from './styled.js'

class Cardapio extends React.Component {
    constructor() {
        super();

        this.state = {
            items: []
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
            <Fragment>
                <Header />
                <Main>
                    <Title> VEJA TODOS OS PRATOS </Title>
                    <ContainerCardapio>
                        {this.state.items.map(i => <ContainerItemCardapio> <Box item={i.item} preco={i.price} image={i.image} /> <Link to={`cardapio/${i.id}`}><ButtonViewMore label="VER MAIS" /></Link> </ContainerItemCardapio>)}
                    </ContainerCardapio>
                </Main>
                <Footer />
            </Fragment>
        )
    }
}

export default Cardapio;