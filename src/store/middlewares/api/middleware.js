import axios from 'axios';
import config from 'config';
import getOr from 'lodash/fp/getOr';

import actions  from './actions';
import C from './constants';

const endpoint = config.default.baseURL;

const getPath = (action, state) => {
    
    if(action.type === C.API_AGGREGATED_GET ) {
        let page = getOr(1, [action.payload.key, 'page'])(state.apiReducer);   
        return `${action.payload.path}/${++page}/${action.payload.size}`;
    } else {
        return action.payload.path;
    }
}

const middleware = ({ dispatch, getState }) => next => action => {
    next(action);
    
    if (action.type === C.API_REQUEST || action.type === C.API_AGGREGATED_GET ) {
        let path = getPath(action, getState());

        const config = {
            url: `${endpoint}${path}`,
            method: action.payload.method,
            data: action.payload.body
        };

        axios
            .request(config)
            .then(response=> action.type === C.API_AGGREGATED_GET
                ? dispatch(actions.aggregatedSuccess(action.payload.key, response.data))
                : dispatch(actions.success(action.payload.key, response.data)))
            .catch(response => dispatch(actions.error(action.payload.key, response.error)));
    }
};


export default middleware;