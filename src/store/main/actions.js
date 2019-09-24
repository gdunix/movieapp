import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchRecentMovies = () =>
    apiActions.apiGet({
        path: `${paths.moviesRecentlyWatched}/10`,
        key: paths.moviesRecentlyWatched
    });

const fetchBest = () =>
    apiActions.apiGet({
        path: `${paths.moviesBest}/10`,
        key: paths.moviesBest
    });

export default {
    fetchRecentMovies,
    fetchBest
};