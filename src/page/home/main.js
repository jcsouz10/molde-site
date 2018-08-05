import React from 'react';
import './styled.css';

import { Link } from "react-router-dom";

import ContainerHome from '../../component/containerItem/containerHome';
import Qualification from '../../component/qualification/qualification';
import ButtonViewMore from '../../component/buttonViewMore/buttonViewMore';

const Main = () => {
    return (
        <div className="main">
            <div className="welcome"> Bem-vindo a Pizzaria Jotace </div>
            <div>
                <strong> Veja alguns dos nossos items </strong>
            </div>
            <ContainerHome />
            <div className="buttonHome">
            <Link className="link" to="cardapio"><ButtonViewMore label="VER TUDO"/></Link>
            </div>
            <div className="imgHomeRecomendation"> <img className="imgHomeRecomendation1" src="https://uploaddeimagens.com.br/images/001/545/726/original/recomenda%C3%A7%C3%B5es.png?1533431367"/></div>
            <Qualification />
        </div>
    )
}

export default Main;