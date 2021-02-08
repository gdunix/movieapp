import PropTypes from 'prop-types';

import MainInfo from './mainInfo';
import Additional from './additional';
import Quotes from './quotes';

const Movie = ({ movie }) => (
    <>
        <MainInfo {...movie} />
        <Additional {...movie} />
        <Quotes {...movie} />
    </>
);

Movie.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default Movie;