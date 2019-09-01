import { actions as apiActions } from 'store/middlewares/api';
import paths from './paths';

const fetchRecentMovies = () =>
    apiActions.apiGet({
        path: `${paths.moviesRecentlyWatched}/10`,
        key: paths.moviesRecentlyWatched
    });

export default {
    fetchRecentMovies
};