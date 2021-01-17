import { createSelector } from 'reselect';
import getOr from 'lodash/fp/getOr';

import paths from './paths';
import * as U from '../utils';

const getDirectors = state =>
    getOr([], [paths.getDirectors, 'data'])(state.api);

 const getDirectorsLoading = state =>
    getOr(false, [paths.getDirectors, 'loading'])(state.api);

export default {
    getDirectors,
    getDirectorsLoading
};
