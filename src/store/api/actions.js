import actionTypes from './actionTypes';

const request = ({path, key, method, body}) => ({
    type: actionTypes.API_REQUEST,
    payload: {
        path,
        key,
        method,
        body
    }
});

const apiGet = ({ path, key }) => request({ path, key, method: 'GET' });

const apiPost = ({ path, key, body }) => request({ path, key, method: 'POST', body});

const apiPut = ({ path, key, body }) => request({ path, key, method: 'PUT', body});

const apiDelete = ({ path, key }) => request({ path, key, method: 'DELETE' });

const aggregatedGet = ({ path, key, size }) => ({
    type: actionTypes.API_AGGREGATED_REQUEST,
    payload: {
        path,
        key,
        size,
    }
});

const success = (key, data) => ({
    type: actionTypes.API_SUCCESS,
    payload: {
        key,
        data
    }
});

const aggregatedSuccess = (key, data) => ({
    type: actionTypes.API_AGGREGATED_SUCCESS,
    payload: {
        key,
        data
    }
});

const error = (key, error) => ({
    type: actionTypes.API_ERROR,
    payload: {
        key,
        error
    }
});

const clear = key => ({
    type: actionTypes.API_CLEAR,
    payload: {
        key
    }
});

export default {
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
    aggregatedGet,
    aggregatedSuccess,
    success,
    error,
    clear
};
