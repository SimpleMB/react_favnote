import {
  GET_TWITTERS,
  ADD_TWITTER,
  DELETE_TWITTER,
  SAVE_TWITTER,
  ERROR_TWITTERS,
  LOADING_TWITTERS,
} from './types';
import { db, auth } from '../firebase';

const setLoading = dispatch => {
  dispatch({ type: LOADING_TWITTERS });
};

export const getTwitters = () => dispatch => {
  setLoading(dispatch);
  db.collection('twitters')
    .where('userId', '==', auth.currentUser.uid)
    .get()
    .then(querySnapshot => {
      const twitters = [];
      querySnapshot.forEach(doc => {
        twitters.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: GET_TWITTERS,
        payload: twitters,
      });
    })
    .catch(err => {
      console.log('Get twitters error: ', err);
      dispatch({
        type: ERROR_TWITTERS,
        payload: err,
      });
    });
};

export const addTwitter = ({ twitterName, title, content, created }) => dispatch => {
  const note = { title, content, twitterName, created, userId: auth.currentUser.uid };
  db.collection('twitters')
    .add(note)
    .then(docRef => {
      note.id = docRef.id;
      dispatch({
        type: ADD_TWITTER,
        payload: note,
      });
    })
    .catch(err => {
      console.log('Add twitter error: ', err);
      dispatch({
        type: ERROR_TWITTERS,
        payload: err,
      });
    });
};
export const deleteTwitter = id => dispatch => {
  db.collection('twitters')
    .doc(id)
    .delete()
    .then(() =>
      dispatch({
        type: DELETE_TWITTER,
        payload: id,
      }),
    )
    .catch(err => {
      console.log('Delete twitter error: ', err);
      dispatch({
        type: ERROR_TWITTERS,
        payload: err,
      });
    });
};

export const saveTwitter = twitter => dispatch => {
  const { title, content } = twitter;
  db.collection('twitters')
    .doc(twitter.id)
    .update({ title, content })
    .then(() =>
      dispatch({
        type: SAVE_TWITTER,
        payload: twitter,
      }),
    )
    .catch(err => {
      console.log('Save twitter error: ', err);
      dispatch({
        type: ERROR_TWITTERS,
        payload: err,
      });
    });
};
