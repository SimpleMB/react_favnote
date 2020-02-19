import {} from 'actions/types';
import { LOGIN, LOGOUT, REGISTER, CHECK_USER } from '../actions/types';

export default (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case CHECK_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
