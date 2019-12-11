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
                <S.LinkContainer>
                    <S.MenuLink to="#">Best of the Decade</S.MenuLink>
                    <S.Menu>
                        <ul>
                            <li><S.Link to="/by-decade/2010-2019">2010-2019</S.Link></li>
                            <li><S.Link to="/by-decade/2000-2009">2000-2009</S.Link></li>
                            <li><S.Link to="/by-decade/1990-1999">1990-1999</S.Link></li>
                        </ul>
                    </S.Menu>
                </S.LinkContainer>
            </S.Links>
        </S.Content>
    </S.Container>
);

export default Header;