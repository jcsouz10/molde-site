import React from 'react';

import { ImageBox, DescriptionItem, ContainerBox } from './styled.js';

const Box = ({ item, preco, image }) => (
    <ContainerBox>
        <ImageBox src={image} />
        {item}
        <DescriptionItem>
            {preco}
        </DescriptionItem>
    </ContainerBox>
)


export default Box;