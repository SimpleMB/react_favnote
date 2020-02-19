import { auth } from '../firebase';
import { LOGIN, LOGOUT, REGISTER, CHECK_USER } from './types';

export const checkUser = user => dispatch => {
  // auth.onAuthStateChanged(user => {
  console.log('user from checkUser', user);
  if (user) {
    const { uid, email } = user;
    dispatch({
      type: CHECK_USER,
      payload: { uid, email },
    });
  }
};
//   );
// };

export const register = (email, password) => dispatch => {
  auth.createUserWithEmailAndPassword(email, password).catch(err => console.log(err));
  auth.onAuthStateChanged(user => {
    console.log('user from register', user);
    if (user) {
      dispatch({
        type: REGISTER,
        payload: { uid: user.uid, email },
      });
    }
  });

  // auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(res => {
  //     const { uid, email: userEmail } = res.user;
  //     if (res.user) {
  //       dispatch({
  //         type: REGISTER,
  //         payload: { uid, userEmail },
  //       });
  //     }
  //   })
  //   .catch(err => console.log(err));
};

export const logout = () => dispatch => {
  auth.signOut().catch(err => console.log(err));
  auth.onAuthStateChanged(user => {
    console.log('user from logout', user);
    if (!user) {
      dispatch({
        type: LOGOUT,
      });
    }
  });

  // auth
  //   .signOut()
  //   .then(() => {
  //     dispatch({
  //       type: LOGOUT,
  //     });
  //   })
  //   .catch(err => console.log(err));
};

export const login = (email, password) => dispatch => {
  auth.signInWithEmailAndPassword(email, password).catch(err => console.log(err));
  const unsub = auth.onAuthStateChanged(user => {
    console.log('user from login', user);
    if (user) {
      const { uid, email: userEmail } = user;
      dispatch({
        type: LOGIN,
        payload: { uid, userEmail },
      });
      unsub();
    }
  });
};
