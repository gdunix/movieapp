import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchDirectors = () =>
    apiActions.apiGet({
        path: `${paths.getDirectors}`,
        key: paths.getDirectors
    });

const clearDirectors = () =>
    apiActions.clear(paths.getDirectors);


export default {
    fetchDirectors,
    clearDirectors
};