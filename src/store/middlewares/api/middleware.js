import axios from 'axios';
import config from 'config';

import actions  from './actions';
import C from './constants';

const endpoint = config.default.baseURL;

const middleware = ({ dispatch }) => next => action => {
    next(action);
    console.log(action.payload)
    if (action.type === C.API_REQUEST) {
        const config = {
            url: `${endpoint}${action.payload.path}`,
            method: action.payload.method,
            data: action.payload.body
        };

        axios
            .request(config)
            .then(response=> dispatch(actions.success(action.payload.key, response.data)))
            .catch(response => dispatch(actions.error(action.payload.key, response.error)));
    }
};


export default middleware;