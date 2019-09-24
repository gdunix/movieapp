import 'regenerator-runtime/runtime';
import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { actions, constants} from '../../api';
import { aggregatedGet } from './saga';
import * as U from './utils'; 

describe('aggregatedGet saga', () => {
    const key = 'rides';
    const path = 'rides';
    const size = 10;
    const doGet = () => {
        const action = actions.aggregatedGet({
            key,
            path,
            size
        });

        const saga = aggregatedGet(action);
        saga.next();
        const expected =
            call(axios.request, {
                url: U.constructURL(constants.ENDPOINT, path, 1, size),
                method: 'GET'
            });

        return {
            saga,
            expected
        }
    };
    it('should handle a succesful call', () => {
        const { saga, expected } = doGet();
        expect(saga.next(1).value).toEqual(expected);
        expect(saga.next({ data: [] }).value).toEqual(put(actions.aggregateSuccess(key, [])));
    })

    it('should handle a failing call', () => {
        const { saga, expected } = doGet();
        expect(saga.next(1).value).toEqual(expected);
        const error = {
            message: '', name: 'Error'
        };
        expect(saga.throw(error).value).toEqual(put(actions.error(key, error)));
    })
});