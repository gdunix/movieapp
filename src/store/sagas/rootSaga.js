import { all } from 'redux-saga/effects';

import apiSaga from './api';
import aggregatedGet from './aggregatedGet';

export default function* rootSaga() {
    yield all([
        apiSaga(),
        aggregatedGet()
    ]);
};