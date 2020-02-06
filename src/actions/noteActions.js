import { GET_NOTES, ADD_NOTE, DELETE_NOTE, SAVE_NOTE } from './types';

export const getNotes = () => async dispatch => {
  dispatch({
    type: GET_NOTES,
    payload: null,
  });
};

export const addNote = note => async dispatch => {
  dispatch({
    type: ADD_NOTE,
    payload: note,
  });
};

export const deleteNote = id => async dispatch => {
  dispatch({
    type: DELETE_NOTE,
    payload: id,
  });
};

export const saveNote = note => async dispatch => {
  dispatch({
    type: SAVE_NOTE,
    payload: note,
  });
};
