import { combineReducers } from 'redux';

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
    rootReducer
});