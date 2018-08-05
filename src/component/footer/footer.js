import React from 'react';
import './styled.css';

const Footer = () => {
    
    const items = ["#pizzaria", "#pizzaria", "#pizzaria", "#pizzaria", "#pizzaria", "#pizzaria"]

    return (
        <div className="footer">
            {items.map(i=><div className="itemFooter">{i}</div>)}
        </div>
    )
}

export default Footer;