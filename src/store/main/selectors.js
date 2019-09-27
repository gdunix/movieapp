import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';
import * as U from '../utils';

const getApiRecentMovies = getOr([], ['api', paths.moviesRecentlyWatched, 'data']);

const getRecentMoviesLoading = getOr(false, ['api', paths.moviesRecentlyWatched, 'loading']);

const getRecentMovies = createSelector(
    getApiRecentMovies,
    U.formatMovies
);

const getApiBest = getOr([], ['api', paths.moviesBest, 'data']);

const getBestLoading = getOr(false, ['api', paths.moviesBest, 'loading']);

const getBest = createSelector(
    getApiBest,
    U.formatMovies
);

export default {
    getRecentMovies,
    getRecentMoviesLoading,
    getBest,
    getBestLoading
};