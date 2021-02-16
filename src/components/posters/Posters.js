import PropTypes from 'prop-types';
import * as S from './styled';

// eslint-disable-next-line react/prop-types
const Posters = Poster => ({ items = [] }) => (
    <S.List>
        {
            items && items.map((props, index) => (
                <S.Item key={index}>
                    <Poster {...props} />
                </S.Item>
            ))
        }
    </S.List>
);

Posters.propTypes = {
    items: PropTypes.array,
};

export default Posters;