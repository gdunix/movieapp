import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchDirectors = () =>
    apiActions.apiGet({
        path: `${paths.getDirectorsCount}`,
        key: paths.getDirectorsCount
    });

const clearDirectors = () =>
    apiActions.clear(paths.getDirectorsCount);


export default {
    fetchDirectors,
    clearDirectors
};