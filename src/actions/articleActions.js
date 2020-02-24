import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, SAVE_ARTICLE } from './types';
import { db, auth } from '../firebase';

export const getArticles = () => dispatch => {
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
    .catch(err => console.log('Get notes error: ', err));
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
    .catch(err => console.error('Error adding document: ', err));
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
    .catch(err => console.log('Error deleting document: ', err));
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
    .catch(err => console.log('Update error: ', err));
};
