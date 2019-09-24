import { createSelector } from 'reselect';
import head from 'lodash/fp/head';
import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';
import paths from './paths';

const getReleaseDates = state =>
    getOr([], [paths.movieReleaseDates, 'data'])(state.api);

const getMovieByReleaseDate = state =>
    getOr([], [paths.moviesByReleaseDate, 'data'])(state.api);

 const getMovieByReleaseDateLoading = state =>
    getOr(false, [paths.moviesByReleaseDate, 'loading'])(state.api);

const getMovies = createSelector(
    getMovieByReleaseDate,
    movies => movies.map(({ _id, title, imageURL, grade }) => ({
        id: _id,
        type: 'movie',
        name: title,
        url: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${imageURL}`,
        grade
    }))
);

const getLatestReleaseDate = compose(
    head,
    getReleaseDates
);

export default {
    getReleaseDates,
    getMovies,
    getMovieByReleaseDateLoading,
    getLatestReleaseDate
};
