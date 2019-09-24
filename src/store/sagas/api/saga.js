import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';

import { actions, actionTypes } from 'store/api';

const endpoint = config.default.baseURL;

export function* callApi(action) {
    const { path, key, method, body } = action.payload;
    const config = {
        url: `${endpoint}${path}`,
        method,
        data: body,
    };

    try {      
       const response = yield call(axios.request, config);
       yield put(actions.success(key, response.data));
    } catch (error) {
       yield put(actions.error(key, error))
    }
 }

export default function* watchCallAPI() {
  yield takeEvery(actionTypes.API_REQUEST, callApi)
}