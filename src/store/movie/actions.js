import { actions as apiActions } from 'store/middlewares/api';
import paths from './paths';

const fetchMovieById = id =>
    apiActions.apiGet({
        path:`${paths.movie}/${id}`,
        key: paths.movie
    });

export default {
    fetchMovieById
};