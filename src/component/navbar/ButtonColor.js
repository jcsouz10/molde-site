import React, { Fragment } from 'react';

import { ButtonYellow, ButtonBlue } from './styled.js';

import './style.css';

const ButtonColor = ({ children, handleColor, changeColor }) => (
    <div className="positionButton">
        <div> {changeColor === "yellow" ? <ButtonBlue onClick={handleColor}> {children} </ButtonBlue> : <ButtonYellow onClick={handleColor}> {children} </ButtonYellow>}  </div>
    </div>
)

export default ButtonColor;