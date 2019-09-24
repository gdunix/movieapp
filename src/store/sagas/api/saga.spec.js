import 'regenerator-runtime/runtime';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { actions, constants } from '../../api';
import { callApi } from './saga';

describe('api saga', () => {
    const key = 'rides';
    const path = 'rides';
    const doGet = () => {
        const action = actions.get({
            key,
            path
        });

        const saga = callApi(action);
        const expected =
            call(axios.request, {
                url: `${constants.ENDPOINT}${path}`,
                method: 'GET'
            });

        return {
            saga,
            expected
        }
    };
    it('should handle a succesful call', () => {
        const { saga, expected } = doGet();
        expect(saga.next().value).toEqual(expected);
        expect(saga.next({ data: [] }).value).toEqual(put(actions.success(key, [])));
    })

    it('should handle a failing call', () => {
        const { saga, expected } = doGet();
        expect(saga.next().value).toEqual(expected);
        const error = {
            message: '', name: 'Error'
        };
        expect(saga.throw(error).value).toEqual(put(actions.error(key, error)));
    })
});