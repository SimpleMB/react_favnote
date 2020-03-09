import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        errors: state.errors.filter(error => error.id !== action.payload),
      };

    default:
      return state;
  }
};
