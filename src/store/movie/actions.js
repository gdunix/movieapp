import { actions as apiActions } from 'store/middlewares/api';
import paths from './paths';

const fetchMovieById = id =>
    apiActions.apiGet(`${paths.movie}/${id}`);

export default {
    fetchMovieById
};