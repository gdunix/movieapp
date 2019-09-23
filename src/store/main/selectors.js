import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';
import * as U from './utils';

const getApiRecentMovies = getOr([], ['apiReducer', paths.moviesRecentlyWatched, 'data']);

const getRecentMoviesLoading = getOr(false, ['apiReducer', paths.moviesRecentlyWatched, 'loading']);

const getRecentMovies = createSelector(
    getApiRecentMovies,
    U.formatMovies
);

const getApiBest = getOr([], ['apiReducer', paths.moviesBest, 'data']);

const getBestLoading = getOr(false, ['apiReducer', paths.moviesBest, 'loading']);

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