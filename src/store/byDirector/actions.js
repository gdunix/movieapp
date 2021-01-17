import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchMovies = ({ director }) =>
    apiActions.apiGet({
        path: `${paths.findMoviesByDirector}/${director}`,
        key: paths.findMoviesByDirector
    });

const clearMovies = () =>
    apiActions.clear(paths.findMoviesByDirector);


export default {
    fetchMovies,
    clearMovies
};