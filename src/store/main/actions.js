import { actions as apiActions } from 'store/middlewares/api';
import paths from './paths';

const fetchRecentMovies = () =>
    apiActions.apiGet(`${paths.moviesRecentlyWatched}/10`);

export default {
    fetchRecentMovies
};