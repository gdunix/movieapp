import { createSelector } from 'reselect';
import head from 'lodash/fp/head';
import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';

import paths from './paths';
import * as U from '../utils';

const getReleaseDates = state =>
    getOr([], [paths.movieReleaseDates, 'data'])(state.api);

const getMovieByReleaseDate = state =>
    getOr([], [paths.moviesByReleaseDate, 'data'])(state.api);

 const getMovieByReleaseDateLoading = state =>
    getOr(false, [paths.moviesByReleaseDate, 'loading'])(state.api);

const getMovies = createSelector(
    getMovieByReleaseDate,
    U.formatMovies
);

const getLatestReleaseDate = createSelector(
    getReleaseDates,
    head
);

export default {
    getReleaseDates,
    getMovies,
    getMovieByReleaseDateLoading,
    getLatestReleaseDate
};
