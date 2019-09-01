import React from 'react';

import * as S from './styled';

const Posters = ({ items, Poster }) => (
    <S.List>
        {
            items.map((props, index) => (
                <S.Item key={index}>
                    <Poster {...props}  />
                </S.Item>
            ))
        }
    </S.List>
);

export default Posters ;