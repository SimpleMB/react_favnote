import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  SAVE_NOTE,
  ERROR_NOTES,
  LOADING_NOTES,
} from '../actions/types';

const initialState = {
  notes: [],
  errors: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
        loading: false,
      };
    case SAVE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => (note.id === action.payload.id ? action.payload : note)),
        loading: false,
      };
    case ERROR_NOTES:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    case LOADING_NOTES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
