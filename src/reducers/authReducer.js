import {} from 'actions/types';
import { LOGIN, LOGOUT, REGISTER } from '../actions/types';

export default (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
