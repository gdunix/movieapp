import React, { Fragment } from 'react';

import Header from './Header';
import * as S from './styled';

const Layout = ({ children }) => (
    <Fragment>
        <S.GlobalStyle />
        <Header />
        <S.Content>
            <S.InnerContent>
                {children}
            </S.InnerContent>           
        </S.Content>   
    </Fragment>
);

export default Layout;

