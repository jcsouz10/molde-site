import React from 'react';
import './styled.css';

import { Link } from "react-router-dom";

const NavBar = () => {

    const itemsHeader = [{
        item: "Home",
        icon: "http://cdn.onlinewebfonts.com/svg/img_172094.png"
    },{
        item: "Cardapio",
        icon: "https://png.icons8.com/ios/1600/sidebar-menu.png"
    },{
        item: "Fale Conosco",
        icon: "http://cdn.onlinewebfonts.com/svg/img_401526.png"
    }]

    return (
        <div className="header">
            {itemsHeader.map(i => <div className="itemHeader">
                <Link className="link" to={`/${i.item}`}>{i.item}
                <div> <img className="iconHeader" src={i.icon}/> </div></Link>
            </div>)}
        </div>
    )
}

export default NavBar;