import React, { Fragment } from 'react';

import MainInfo from './mainInfo';
import Additional from './additional';
import Quotes from './quotes';

const Movie = ({ movie }) => (
    <Fragment>
        <MainInfo {...movie} />
        <Additional {...movie} />
        <Quotes {...movie} />
    </Fragment>
);

export default Movie;