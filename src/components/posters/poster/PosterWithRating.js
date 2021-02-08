import Rating from 'components/rating';
import Poster from './Poster';

import * as S from './styled';

const PosterWithRating = ({ grade, ...props }) => (
    <>
        <Poster {...props} />
        <S.Rating>
            <Rating {...{ grade }} />
        </S.Rating>
    </>
);

export default PosterWithRating;