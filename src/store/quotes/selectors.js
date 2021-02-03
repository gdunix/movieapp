import getOr from 'lodash/fp/getOr';
import { createSelector } from 'reselect';

import * as U from './utils';
import paths from './paths';

const getRandomQuotes = state => createSelector(
    getOr([], [paths.getRandomQuotes, 'data']),
    U.formatMovies
)(state.api);

 const getRandomQuotesLoading = state =>
    getOr(false, [paths.getRandomQuotes, 'loading'])(state.api);

export default {
    getRandomQuotes,
    getRandomQuotesLoading
};
