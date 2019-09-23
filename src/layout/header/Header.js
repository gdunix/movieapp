import React from 'react';
import * as S from './styled';

const Header = () => (
    <S.Container>
        <S.Content>
            <S.Logo>
                <S.LogoLink to="/">The Movie App</S.LogoLink>
            </S.Logo>
            <S.Links>
                <S.LinkContainer>
                    <S.Link to="/latest-seen">Latest Seen</S.Link>
                </S.LinkContainer>
                <S.LinkContainer>
                    <S.Link to="/by-year">By Year</S.Link>
                </S.LinkContainer>
            </S.Links>
        </S.Content>    
    </S.Container>
);

export default Header;