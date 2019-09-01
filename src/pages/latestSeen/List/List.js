import React, { Fragment, memo } from 'react';

import { PostersWithRating } from 'components/posters';
import Loader from 'components/loader';

const List = ({ isFetching, items }) => (
    <Fragment>
        <PostersWithRating items={items} />
        { isFetching && <Loader /> }
    </Fragment>
);

export default memo(List);