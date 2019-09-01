import React, { Fragment } from 'react';

import withTitle from 'hocs/withTitle';
import { PostersWithRating } from 'components/posters';

const MovieList = withTitle(PostersWithRating);

const Main = ({movies}) => (
    <Fragment>
        <MovieList title={'Latest Seen'} items={movies} />
    </Fragment>
);

export default Main;