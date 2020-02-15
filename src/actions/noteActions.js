import { GET_NOTES, ADD_NOTE, DELETE_NOTE, SAVE_NOTE } from './types';
import { db, auth } from '../firebase';

export const getNotes = () => dispatch => {
  console.log('hello from getNotes, current user is: ', auth.currentUser.email);
  db.collection('notes')
    .where('userId', '==', auth.currentUser.uid)
    .get()
    .then(querySnapshot => {
      console.log(querySnapshot);
      const notes = [];
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        notes.push({ id: doc.id, ...doc.data() });
      });
      console.log(notes);
      dispatch({
        type: GET_NOTES,
        payload: notes,
      });
    })
    .catch(err => console.log('Get notes error: ', err));
};

export const addNote = ({ title, content, created }) => dispatch => {
  const note = { title, content, created, userId: auth.currentUser.uid };
  db.collection('notes')
    .add(note)
    .then(function(docRef) {
      note.id = docRef.id;
      dispatch({
        type: ADD_NOTE,
        payload: note,
      });
    })
    .catch(err => console.error('Error adding document: ', err));
};

export const deleteNote = id => dispatch => {
  db.collection('notes')
    .doc(id)
    .delete()
    .then(() =>
      dispatch({
        type: DELETE_NOTE,
        payload: id,
      }),
    )
    .catch(err => console.log('Error deleting document: ', err));
};

export const saveNote = note => dispatch => {
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
    .catch(err => console.log('Update error: ', err));
};
