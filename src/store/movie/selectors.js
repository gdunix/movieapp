import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getMovie = state => getOr({}, [paths.movie, 'data'])(state.apiReducer);

export default {
    getMovie
};