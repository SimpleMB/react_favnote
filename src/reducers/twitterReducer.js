import { GET_TWITTERS, ADD_TWITTER, DELETE_TWITTER, SAVE_TWITTER } from 'actions/types';
import { ERROR_TWITTERS, LOADING_TWITTERS } from '../actions/types';

const initialState = {
  twitters: [],
  errors: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TWITTERS:
      return {
        ...state,
        twitters: action.payload,
        loading: false,
      };
    case ADD_TWITTER:
      return {
        ...state,
        twitters: [...state.twitters, action.payload],
      };
    case DELETE_TWITTER:
      return {
        ...state,
        twitters: state.twitters.filter(twit => twit.id !== action.payload),
      };
    case SAVE_TWITTER:
      return {
        ...state,
        twitters: state.twitters.map(twit =>
          twit.id === action.payload.id ? action.payload : twit,
        ),
      };
    case ERROR_TWITTERS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    case LOADING_TWITTERS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
