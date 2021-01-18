import getOr from 'lodash/fp/getOr';

import paths from './paths';

const getDirectors = state =>
    getOr([], [paths.getDirectorsCount, 'data'])(state.api);

 const getDirectorsLoading = state =>
    getOr(false, [paths.getDirectorsCount, 'loading'])(state.api);

export default {
    getDirectors,
    getDirectorsLoading
};
