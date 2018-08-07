import React from 'react';

import { ImageBox, DescriptionItem, ContainerBox } from './styled.js';

const Box = ({ item, preco, image }) => {
    return (
        <ContainerBox>
            <div>
                <ImageBox src={image} />
            </div>
            <div>
                {item}
            </div>
            <DescriptionItem>
                {preco}
            </DescriptionItem>
        </ContainerBox>
    )
}

export default Box;