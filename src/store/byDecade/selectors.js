import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';
import * as U from '../utils';

const getApiMovies = state =>
    getOr([], [paths.moviesBestOf, 'data'])(state.api);

 const getMoviesLoading = state =>
    getOr(false, [paths.moviesBestOf, 'loading'])(state.api);

const getMovies = createSelector(
    getApiMovies,
    U.formatMovies
);

export default {
    getMovies,
    getMoviesLoading
};
