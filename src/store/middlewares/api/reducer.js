import actionTypes from './constants';


const reducer = (state = {}, action) => {
    switch (action.type) {
      case actionTypes.API_REQUEST:
        return {
          ...state,
          [action.payload.key]: {
            loading: true,
            error: ''
          }
        };
      case actionTypes.API_RESPONSE:
        return {
          ...state,
          [action.payload.key]: {
            loading: false,
            data: action.payload.data,
            error: ''
          }
        };
      case actionTypes.API_ERROR:
        return {
          ...state,
          [action.payload.key]: {
            loading: false,
            error: action.payload.error
          }
        };
      case actionTypes.API_CLEAR:
        return {
          ...state,
          [action.payload.key]: {
            loading: false,
            data: null
          }
        };
      default:
        return state;
    }
  };
  
  export default reducer;