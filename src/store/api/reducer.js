import actionTypes from './actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.API_REQUEST:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key] ? state[action.payload.key] : {},
          loading: true,
        }
      };
    case actionTypes.API_AGGREGATED_REQUEST:
      return {
        ...state,
        [action.payload.key]: {
          loading: true,
          data: state[action.payload.key].data || [],
          page: state[action.payload.key].page || 1,
          end: state[action.payload.key].end || false,
        }
      };
    case actionTypes.API_SUCCESS:
      return {
        ...state,
        [action.payload.key]: {
          loading: false,
          data: action.payload.data,
        }
      };
    case actionTypes.API_AGGREGATED_SUCCESS:
      return {
        ...state,
        [action.payload.key]: {
          loading: false,
          data: [...state[action.payload.key].data || [], ...action.payload.data],
          page: action.payload.data.length ? state[action.payload.key].page + 1 : state[action.payload.key].page,
          end: !action.payload.data.length > 0
        }
      };
    case actionTypes.API_ERROR:
      return {
        ...state,
        [action.payload.key]: {
          loading: false,
          error: {
            name: action.payload.name,
            message: action.payload.message,
          }
        }
      };
    case actionTypes.API_CLEAR:
      return {
        ...state,
        [action.payload.key]: {
          loading: false
        }
      };
    default:
      return state;
  }
};

export default reducer;
