import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getMoviesLatestSeen = state =>
    getOr([],[paths.moviesLatestSeen, "data"])(state.apiReducer);

const getMoviesIsLoading = state =>
    getOr(false, [paths.moviesLatestSeen, 'loading'])(state.apiReducer);

const getCurrentPage = state =>
    getOr(1, [paths.moviesLatestSeen, 'page'])(state.apiReducer);

const getMovies = createSelector(
    getMoviesLatestSeen,
    movies => movies.map(({ _id, title, imageURL, grade }) => ({
        id: _id,
        type: 'movie',
        name: title,
        url: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${imageURL}`,
        grade
    }))
);

export default {
    getMovies,
    getMoviesIsLoading,
    getCurrentPage
};