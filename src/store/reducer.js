import { combineReducers } from 'redux';

import { reducer as apiReducer } from './middlewares/api';

export default combineReducers({
    apiReducer
});