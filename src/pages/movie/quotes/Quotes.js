import React, { Fragment } from 'react';

import * as S from './styled';

const Quotes = ({ quotes }) => (
    <Fragment>
        {
            quotes && quotes.map(({text}, index) => (
                <S.Blockquote key={index}>
                    {text}
                </S.Blockquote>
            ))
        }
    </Fragment>
);

export default Quotes;