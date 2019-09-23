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
    case actionTypes.API_AGGREGATED_GET:
      return {
        ...state,
        [action.payload.key]: {
          loading: true,
          data: state[action.payload.key].data || [],
          error: '',
          page: state[action.payload.key].page || 1
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
    case actionTypes.API_AGGREGATED_RESPONSE:
      return {
        ...state,
        [action.payload.key]: {
          loading: false,
          data: [ ...state[action.payload.key].data || [], ...action.payload.data],
          error: '',
          page: action.payload.data.length ? state[action.payload.key].page + 1 : state[action.payload.key].page
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
        [action.payload.key]: undefined
      };
    default:
      return state;
  }
};

export default reducer;