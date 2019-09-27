import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import * as U from './utils';
import paths from './paths';

const getApiMovie = getOr({}, ['api', paths.movie, 'data']);

const getMovieLoading = getOr(false, ['api', paths.movie, 'loading']);

const getMovie = createSelector(
    getApiMovie,
    U.formatMovie
);

export default {
    getMovie,
    getMovieLoading
};