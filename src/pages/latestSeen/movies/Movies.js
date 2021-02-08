import { memo } from 'react';
import PropTypes from 'prop-types';
import { PostersWithRating } from 'components/posters';
import Loader from 'components/loader';

const Movies = ({ isFetching = false, items = [] }) => (
    <>
        <PostersWithRating items={items} />
        { isFetching && <Loader /> }
    </>
);

Movies.propTypes = {
    isFetching: PropTypes.bool,
    items: PropTypes.array,
};

export default memo(Movies);