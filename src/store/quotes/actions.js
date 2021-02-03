import { actions as apiActions } from 'store/api';
import paths from './paths';

const fetchRandomQuotes = () =>
    apiActions.apiGet({
        path: `${paths.getRandomQuotes}/10`,
        key: paths.getRandomQuotes
    });

const clearRandomQuotes = () =>
    apiActions.clear(paths.getRandomQuotes);


export default {
    fetchRandomQuotes,
    clearRandomQuotes
};