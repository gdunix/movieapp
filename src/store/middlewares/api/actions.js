import actionTypes from './constants';

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

const apiPost = ({ path, key, body }) => request({ path, key, method:'POST', body});

const apiPut = ({ path, key, body }) => request({ path, key, method:'PUT', body});

const apiDelete = ({ path, key }) => request({ path, key, method: 'DELETE' });

const success = (key, data) => ({
    type: actionTypes.API_RESPONSE,
    payload: {
        key,
        data
    }    
});

const error = (key, error) => ({
    type: actionTypes.API_RESPONSE,
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

const apiClear = key => dispatch => dispatch(clear(key));

export default {
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
    success,
    error,
    apiClear
};