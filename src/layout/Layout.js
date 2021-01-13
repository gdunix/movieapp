import Header from './header';
import * as S from './styled';

const Layout = ({ children }) => (
    <>
        <S.GlobalStyle />
        <Header />
        <S.Content>
            <S.InnerContent>
                {children}
            </S.InnerContent>           
        </S.Content>   
    </>
);

export default Layout;

