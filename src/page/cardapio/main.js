import React from 'react';

import './styled.css';

import { Link } from "react-router-dom";

import ContainerHome from '../../component/containerItem/containerHome';
import BoxItemCardapio from '../../component/boxItemCardapio/BoxItemCardapio';

const Main = () => {
    return (
        <div className="main">
            <div className="welcome"> VEJA TODOS OS NOSSOS PRATOS </div>
            <BoxItemCardapio/>
        </div>
    )
}

export default Main;