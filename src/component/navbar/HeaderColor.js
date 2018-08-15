import React, { Fragment } from 'react';

import { HeaderYellow, HeaderBlue } from './styled.js';

const HeaderColor = ({ changeColor, children }) => (
    <Fragment>
        {changeColor === "blue" ? <HeaderBlue>{children}</HeaderBlue> : <HeaderYellow>{children}</HeaderYellow>}
    </Fragment>
)



export default HeaderColor;