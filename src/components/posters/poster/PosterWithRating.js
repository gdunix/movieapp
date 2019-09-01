import React, { Fragment } from 'react';

import Rating from 'components/rating';
import Poster from './Poster';

import * as S from './styled';

const PosterWithRating = ({ grade, ...props }) => (
    <Fragment>
        <Poster {...props} />
        <S.Rating>
            <Rating {...{ grade }} />
        </S.Rating>
    </Fragment>
);

export default PosterWithRating