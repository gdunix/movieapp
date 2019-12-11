import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchMovies = ({ from, to }) =>
    apiActions.apiGet({
        path: `${paths.moviesBestOf}/${from}/${to}`,
        key: paths.moviesBestOf
    });

const clearMovies = () =>
    apiActions.clear(paths.moviesBestOf);


export default {
    fetchMovies,
    clearMovies
};