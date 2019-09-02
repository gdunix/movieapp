import React, { Fragment } from 'react';

import * as S from './styled';

const withTitle = WrappedComponent => ({ title, ...rest }) => (
    <Fragment>
        <S.Title>{title}</S.Title>
        <S.Content>
            <WrappedComponent {...rest} />
        </S.Content>
    </Fragment>
);

export default withTitle;