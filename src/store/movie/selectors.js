import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getMovie = getOr({}, ['apiReducer', paths.movie, 'data']);

const getMovieLoading = getOr(false, ['apiReducer', paths.movie, 'loading']);

export default {
    getMovie,
    getMovieLoading
};