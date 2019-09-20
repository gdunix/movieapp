import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getRecentMovies = getOr([], ['apiReducer', paths.moviesRecentlyWatched, 'data']);

const getRecentMoviesLoading = getOr(false, ['apiReducer', paths.moviesRecentlyWatched, 'loading']);

const getMain = createSelector(
    [getRecentMovies],
    movies => movies.map(({ _id, title, imageURL, grade }) => ({ 
        id: _id,
        type: 'movie',
        name: title,
        url: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${imageURL}`,
        grade
    })));

export default {
    getMain,
    getRecentMoviesLoading
};