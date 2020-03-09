import {} from 'actions/types';
import { LOGIN, LOGOUT, REGISTER, CHECK_USER, ERROR_USER, LOADING_USER } from '../actions/types';

export default (state = { user: null, error: null, loading: true }, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case CHECK_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
      };
    case ERROR_USER:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
