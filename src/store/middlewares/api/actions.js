import actionTypes from './constants';

const request = (path, method, body) => ({
    type: actionTypes.API_REQUEST,
    payload: {
        path,
        method,
        body
    }
});

const apiGet = path => request(path, 'GET');

const apiPost = (path, body) => request(path, 'POST', body);

const apiPut = (path, body) => request(path, 'PUT', body);

const apiDelete = path => request(path, 'DELETE');

const success = (path, data) => ({
    type: actionTypes.API_RESPONSE,
    payload: {
        path,
        data
    }    
});

const error = (path, error) => ({
    type: actionTypes.API_RESPONSE,
    payload: {
        path,
        error
    }   
});

const clear = path => ({
    type: actionTypes.API_CLEAR,
    payload: {
        path
    }  
});

const apiClear = path => dispatch => dispatch(clear(path));

export default {
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
    success,
    error,
    apiClear
};
