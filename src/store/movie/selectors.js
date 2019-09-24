import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getMovie = getOr({}, ['api', paths.movie, 'data']);

const getMovieLoading = getOr(false, ['api', paths.movie, 'loading']);

export default {
    getMovie,
    getMovieLoading
};