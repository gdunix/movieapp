import React, { Fragment } from 'react';

import * as S from './styled';

const withTitle = WrappedComponent => ({ title, ...rest }) => (
    <Fragment>
        <h2>{title}</h2>
        <S.Content>
            <WrappedComponent {...rest} />
        </S.Content>
    </Fragment>
);

export default withTitle;