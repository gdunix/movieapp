import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchMovieById = id =>
    apiActions.apiGet({
        path:`${paths.movie}/${id}`,
        key: paths.movie
    });

const clearMovie = () =>
    apiActions.clear(paths.movie);

export default {
    fetchMovieById,
    clearMovie
};