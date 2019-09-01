import axios from 'axios';
import config from 'config';

import actions  from './actions';
import C from './constants';

const endpoint = config.default.baseURL;

const middleware = ({ dispatch }) => next => action => {
    next(action);
    
    if (action.type === C.API_REQUEST) {
        const config = {
            url: `${endpoint}${action.payload.path}`,
            method: action.payload.method,
            data: action.payload.body
        };

        axios
            .request(config)
            .then(response=> dispatch(actions.success(action.payload.path.split('/')[0], response.data)))
            .catch(response => dispatch(actions.error(action.payload.path, response.error)));
    }
};


export default middleware;