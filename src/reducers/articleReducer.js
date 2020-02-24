import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, SAVE_ARTICLE } from '../actions/types';

const initialState = {
  articles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.payload),
      };
    case SAVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload.id ? action.payload : article,
        ),
      };
    default:
      return state;
  }
};
