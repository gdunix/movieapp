import React, { Fragment } from 'react';

import * as S from './styled';

const Quotes = ({ comments }) => (
    <Fragment>
        { comments && <h3>Quotes</h3> }
        {
            <S.Blockquote>
                <div dangerouslySetInnerHTML={{ __html: comments }} />
            </S.Blockquote>
        }
    </Fragment>
);

export default Quotes;