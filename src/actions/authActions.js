import { auth } from '../firebase';
import { LOGIN, LOGOUT, REGISTER } from './types';

export const login = (email, password) => dispatch => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));

  // setting listener for change in Auth then remove listener
  const unsub = auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        action: LOGIN,
        payload: user,
      });
      unsub();
    }
  });
};

export const logout = () => dispatch => {
  auth.signOut();
  dispatch({
    action: LOGOUT,
  });
};

export const register = (email, password) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));

  // setting listener for change in Auth then remove listener
  const unsub = auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        action: REGISTER,
        payload: user,
      });
      unsub();
    }
  });
};
