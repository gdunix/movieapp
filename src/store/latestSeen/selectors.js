import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';
import * as U from '../utils';

const getMoviesLatestSeen = 
    getOr([],['api', paths.moviesLatestSeen, 'data']);

const getMoviesIsLoading =
    getOr(false, ['api', paths.moviesLatestSeen, 'loading']);

const getCurrentPage =
    getOr(1, ['api', paths.moviesLatestSeen, 'page']);

const getMovies = createSelector(
    getMoviesLatestSeen,
    U.formatMovies
);

const getMoviesEnd = getOr(false, ['api', paths.moviesLatestSeen, 'end']);

export default {
    getMovies,
    getMoviesIsLoading,
    getCurrentPage,
    getMoviesEnd
};