import { GET_NOTES, ADD_NOTE, DELETE_NOTE, SAVE_NOTE, ERROR_NOTES, LOADING_NOTES } from './types';
import { db, auth } from '../firebase';

const setLoading = dispatch => {
  dispatch({ type: LOADING_NOTES });
};

export const getNotes = () => dispatch => {
  setLoading(dispatch);
  db.collection('notes')
    .where('userId', '==', auth.currentUser.uid)
    .get()
    .then(querySnapshot => {
      const notes = [];
      querySnapshot.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: GET_NOTES,
        payload: notes,
      });
    })
    .catch(err => {
      console.log('Get notes error: ', err);
      dispatch({
        type: ERROR_NOTES,
        payload: err,
      });
    });
};

export const addNote = ({ title, content, created }) => dispatch => {
  // setLoading(dispatch);
  const note = { title, content, created, userId: auth.currentUser.uid };
  db.collection('notes')
    .add(note)
    .then(docRef => {
      note.id = docRef.id;
      dispatch({
        type: ADD_NOTE,
        payload: note,
      });
    })
    .catch(err => {
      console.log('Add note error: ', err);
      dispatch({
        type: ERROR_NOTES,
        payload: err,
      });
    });
};

export const deleteNote = id => dispatch => {
  // setLoading(dispatch);
  db.collection('notes')
    .doc(id)
    .delete()
    .then(() =>
      dispatch({
        type: DELETE_NOTE,
        payload: id,
      }),
    )
    .catch(err => {
      console.log('Delete note error: ', err);
      dispatch({
        type: ERROR_NOTES,
        payload: err,
      });
    });
};

export const saveNote = note => dispatch => {
  // setLoading(dispatch);
  const { title, content } = note;
  db.collection('notes')
    .doc(note.id)
    .update({ title, content })
    .then(() =>
      dispatch({
        type: SAVE_NOTE,
        payload: note,
      }),
    )
    .catch(err => {
      console.log('Save note error: ', err);
      dispatch({
        type: ERROR_NOTES,
        payload: err,
      });
    });
};
