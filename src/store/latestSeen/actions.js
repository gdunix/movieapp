import { actions as apiActions } from 'store/middlewares/api';
import paths from './paths';

const fetchMoviesLatestSeen =  (page, size) =>
    apiActions.apiGet({ 
        path: `${paths.moviesLatestSeen}/${page}/${size}`,
        key: paths.moviesLatestSeen
    });

const fetchMoviesLatestSeenThrottled =  size =>
    apiActions.aggregatedGet({
        path: `${paths.moviesLatestSeen}`,
        key: paths.moviesLatestSeen,
        size
    });

export default {
    fetchMoviesLatestSeen,
    fetchMoviesLatestSeenThrottled
};