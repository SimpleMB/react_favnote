import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, SAVE_ARTICLE } from '../actions/types';

const initialState = {
  articles: [
    {
      id: '1',
      title: 'Hello, this is a first',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      articleUrl: '',
      created: '2 days ago',
    },
    {
      id: '2',
      title: 'Miles Dewey Davis III',
      content:
        'He was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th century music.',
      articleUrl: '',
      created: '5 days ago',
    },
    {
      id: '3',
      title: 'John William Coltrane',
      content:
        'An American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz.',
      articleUrl: '',
      created: '6 days ago',
    },
    {
      id: '4',
      title: 'Wayne Shorter',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      articleUrl: '',
      created: '6 days ago',
    },
    {
      id: '5',
      title: 'Early life and career',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      articleUrl: '',
      created: '9 days ago',
    },
    {
      id: '6',
      title: 'With Miles Davis (1964–70)dsfdsfsdfsdfdsf',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      articleUrl: 'http://google.pl',
      created: '10 days ago',
    },
  ],
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
