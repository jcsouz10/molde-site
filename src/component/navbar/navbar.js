import React from 'react';

import { Link } from "react-router-dom";
import { ContainerHeader, ItemHeader, ImageItemHeader, HeaderYellow } from './styled.js';

import './style.css';

import HeaderColor from './HeaderColor.js';
import ButtonColor from './ButtonColor.js';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            itemsHeader: [{
                item: "Home",
                icon: "http://cdn.onlinewebfonts.com/svg/img_172094.png"
            }, {
                item: "Cardapio",
                icon: "https://png.icons8.com/ios/1600/sidebar-menu.png"
            }, {
                item: "Fale Conosco",
                icon: "http://cdn.onlinewebfonts.com/svg/img_401526.png"
            }],
            statusColor: "yellow"
        }

    }

    changeColor = () => {
        this.setState({
            statusColor: this.state.statusColor === "yellow" ? "blue" : "yellow"
        })
    }

    render() {
        return (
            <HeaderColor changeColor={this.state.statusColor}>
                {this.state.itemsHeader.map(i =>
                    <ItemHeader>
                        <Link className="link" to={`/${i.item}`}>{i.item}
                            <div> <ImageItemHeader src={i.icon} /> </div></Link>
                    </ItemHeader>)}
                <ButtonColor changeColor={this.state.statusColor} handleColor={this.changeColor}> MUDAR COR </ButtonColor>
            </HeaderColor>
        )
    }

}

export default Header;