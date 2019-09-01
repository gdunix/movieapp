import { combineReducers } from 'redux';

import { reducer as apiReducer } from './middlewares/api';

const rootReducer = (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }

export default combineReducers({
    rootReducer,
    apiReducer
});