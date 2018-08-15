import React from 'react';

import { ContainerMain } from './styled.js';

const Main = ({ children }) => {
    return (
        <ContainerMain>
            {children}
        </ContainerMain>
    )
}

export default Main;