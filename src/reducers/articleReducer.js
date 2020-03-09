import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SAVE_ARTICLE,
  ERROR_ARTICLES,
  LOADING_ARTICLES,
} from '../actions/types';

const initialState = {
  articles: [],
  error: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
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
    case ERROR_ARTICLES:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING_ARTICLES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
