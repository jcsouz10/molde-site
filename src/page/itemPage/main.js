import React from 'react';
import './styled.css';

import { Link } from "react-router-dom";
import BoxItemCardapioSelected from '../../component/boxItemCardapioSelected/boxItemCardapioSelected';

const Main = ({ id }) => {
    return (
        <div className="itemPage">
            <BoxItemCardapioSelected id={id}/>
        </div>

    )
}

export default Main;