import { GET_NOTES, ADD_NOTE, DELETE_NOTE, SAVE_NOTE } from '../actions/types';

const initialState = {
  notes: [
    {
      id: '1',
      title: 'Hello, this is a first',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      created: '2 days ago',
    },
    {
      id: '2',
      title: 'Miles Dewey Davis III',
      content:
        'He was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th century music.',
      created: '5 days ago',
    },
    {
      id: '3',
      title: 'John William Coltrane',
      content:
        'An American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz.',
      created: '6 days ago',
    },
    {
      id: '4',
      title: 'Wayne Shorter',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      created: '6 days ago',
    },
    {
      id: '5',
      title: 'Early life and career',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      created: '9 days ago',
    },
    {
      id: '6',
      title: 'With Miles Davis (1964–70)',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      created: '10 days ago',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    case SAVE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => (note.id === action.payload.id ? action.payload : note)),
      };
    default:
      return state;
  }
};
