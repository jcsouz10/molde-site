import React from 'react';

import Footer from '../../component/footer/footer.js';
import NavBar from '../../component/navbar/navbar.js';
import Main from '../../component/main/Main.js';
import BoxItemCardapio from '../../component/boxItemCardapio/BoxItemCardapio';

import { Title } from '../styled.js';

const Cardapio = () => {
    return (
        <div>
            <NavBar />
            <Main>
                <Title> VEJA TODOS OS NOSSOS PRATOS </Title>
                <BoxItemCardapio />
            </Main>
            <Footer />
        </div>
    )
}

export default Cardapio;