
import * as S from './styled';

const withTitle = WrappedComponent => ({ title, ...rest }) => (
    <>
        <S.Title>{title}</S.Title>
        <S.Content>
            <WrappedComponent {...rest} />
        </S.Content>
    </>
);

export default withTitle;