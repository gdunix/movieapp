import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getMoviesLatestSeen = 
    getOr([],['api', paths.moviesLatestSeen, 'data']);

const getMoviesIsLoading =
    getOr(false, ['api', paths.moviesLatestSeen, 'loading']);

const getCurrentPage =
    getOr(1, ['api', paths.moviesLatestSeen, 'page']);

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

const getMoviesEnd = getOr(false, ['api', paths.moviesLatestSeen, 'end']);

export default {
    getMovies,
    getMoviesIsLoading,
    getCurrentPage,
    getMoviesEnd
};