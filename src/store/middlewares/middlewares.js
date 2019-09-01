import thunk from 'redux-thunk';

import api from './api';

const middlewares = [thunk, api];

export default middlewares;