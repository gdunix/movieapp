import getOr from 'lodash/fp/getOr';

const pageSelector = key => getOr(1, ['api', key, 'page']);

export default {
    pageSelector
};