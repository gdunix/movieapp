import { select, put, call, throttle } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';

import { actions, actionTypes, selectors  } from 'store/api';

const DELAY = 500;
const endpoint = config.default.baseURL;

export function* aggregatedGet(action) {
    const { path, key, size } = action.payload;
    const page = yield select(selectors.pageSelector(key));

    const config = {
        url: `${endpoint}${path}/${page+1}/${size}`,
        method: 'GET'
    };

    try {
        const response = yield call(axios.request, config);
        yield put(actions.aggregatedSuccess(key, response.data));
    } catch (error) {
        console.log(error)
        yield put(actions.error(key, error))
    }
}

export default function* watchAggregatedGet() {
    yield throttle(DELAY, actionTypes.API_AGGREGATED_REQUEST, aggregatedGet)
}