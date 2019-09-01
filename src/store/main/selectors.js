import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getRecentMovies = state => getOr([], [paths.moviesRecentlyWatched, 'data'])(state.apiReducer);

const getMain = createSelector(
    [getRecentMovies],
    movies => movies.map(({ _id, title, imageURL, grade }) => ({ 
        id: _id,
        type: 'movies',
        name: title,
        url: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${imageURL}`,
        grade
    })));

export default {
    getMain
};