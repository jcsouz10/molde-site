import React from 'react';
import './styled.css';

const Box = ({ item, preco, image }) => {
    return (
        <div className="box">
            <div>
                <img className="imgBox" src={image} />
            </div>
            <div>
                {item}
            </div>
            <div className="descriptionItemBox">
                {preco}
            </div>
        </div>
    )
}

export default Box;