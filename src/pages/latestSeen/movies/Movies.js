import { memo } from 'react';

import { PostersWithRating } from 'components/posters';
import Loader from 'components/loader';

const Movies = ({ isFetching, items }) => (
    <>
        <PostersWithRating items={items} />
        { isFetching && <Loader /> }
    </>
);

export default memo(Movies);