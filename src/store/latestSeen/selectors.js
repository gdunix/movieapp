import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getMoviesLatestSeen = 
    getOr([],['apiReducer', paths.moviesLatestSeen, 'data']);

const getMoviesIsLoading =
    getOr(false, ['apiReducer', paths.moviesLatestSeen, 'loading']);

const getCurrentPage =
    getOr(1, ['apiReducer', paths.moviesLatestSeen, 'page']);

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