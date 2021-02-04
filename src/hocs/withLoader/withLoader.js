
import Loader from 'components/loader';

import * as S from './styled';

const withLoader = ({ hide = false }) => WrappedComponent => ({ isLoading, ...props }) => (
    <S.Container>
        {isLoading && <Loader />}
        {!(isLoading && hide) && <WrappedComponent {...props} />}
    </S.Container>
);

export default withLoader;