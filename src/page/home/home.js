import React from 'react';

import Footer from '../../component/footer/footer.js';
import Header from '../../component/navbar/navbar.js';
import Main from '../../component/main/Main.js';


import { Link } from "react-router-dom";

import ContainerHome from '../../component/containerItem/containerHome';
import Qualification from '../../component/qualification/qualification';
import ButtonViewMore from '../../component/buttonViewMore/buttonViewMore';

import { Title } from '../styled.js';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Main>
                <Title> Bem-vindo a Pizzaria Jotace </Title>
                    <strong> Veja alguns dos nossos items </strong>
                <ContainerHome />
                    <Link className="link" to="cardapio"><ButtonViewMore label="VER TUDO" /></Link>                
                <Qualification />
            </Main>
            <Footer />
        </div>
    )
}

export default HomePage;