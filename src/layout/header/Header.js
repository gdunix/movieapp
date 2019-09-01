import React from 'react';
import * as S from './styled';

const Header = () => (
    <S.Container>
        <S.Content>
            <S.Logo>
                <S.LogoLink href="/">The Movie App</S.LogoLink>
            </S.Logo>
            <S.Links>
                <S.LinkContainer>
                    <S.Link to="/latest-seen">Latest Seen</S.Link>
                </S.LinkContainer>
            </S.Links>
        </S.Content>    
    </S.Container>
);

export default Header;