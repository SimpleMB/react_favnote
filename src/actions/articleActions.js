import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SAVE_ARTICLE,
  ERROR_ARTICLES,
  LOADING_ARTICLES,
} from './types';
import { db, auth } from '../firebase';

const setLoading = dispatch => {
  dispatch({ type: LOADING_ARTICLES });
};

export const getArticles = () => dispatch => {
  setLoading(dispatch);
  db.collection('articles')
    .where('userId', '==', auth.currentUser.uid)
    .get()
    .then(querySnapshot => {
      const articles = [];
      querySnapshot.forEach(doc => {
        articles.push({ id: doc.id, ...doc.data() });
      });
      dispatch({
        type: GET_ARTICLES,
        payload: articles,
      });
    })
    .catch(err => {
      console.log('Get articles error: ', err);
      dispatch({
        type: ERROR_ARTICLES,
        payload: err,
      });
    });
};

export const addArticle = ({ title, articleUrl, content, created }) => dispatch => {
  const article = { title, articleUrl, content, created, userId: auth.currentUser.uid };
  const urlCorrect = /^(http|https)/.test(articleUrl);

  if (!urlCorrect) {
    const correctUrl = `https://${articleUrl}`;
    article.articleUrl = correctUrl;
  }
  db.collection('articles')
    .add(article)
    .then(docRef => {
      article.id = docRef.id;
      dispatch({
        type: ADD_ARTICLE,
        payload: article,
      });
    })
    .catch(err => {
      console.log('Add article error: ', err);
      dispatch({
        type: ERROR_ARTICLES,
        payload: err,
      });
    });
};

export const deleteArticle = id => dispatch => {
  db.collection('articles')
    .doc(id)
    .delete()
    .then(() =>
      dispatch({
        type: DELETE_ARTICLE,
        payload: id,
      }),
    )
    .catch(err => {
      console.log('Delete article error: ', err);
      dispatch({
        type: ERROR_ARTICLES,
        payload: err,
      });
    });
};

export const saveArticle = article => dispatch => {
  const { title, content } = article;
  db.collection('articles')
    .doc(article.id)
    .update({ title, content })
    .then(() =>
      dispatch({
        type: SAVE_ARTICLE,
        payload: article,
      }),
    )
    .catch(err => {
      console.log('Save article error: ', err);
      dispatch({
        type: ERROR_ARTICLES,
        payload: err,
      });
    });
};
