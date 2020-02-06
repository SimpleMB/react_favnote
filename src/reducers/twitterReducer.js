import { GET_TWITTERS } from 'actions/types';

const initialState = {
  twitters: [
    {
      id: 1,
      title: 'Hello, this is',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      created: '2 days ago',
      twitterName: 'hello_roman',
    },
    {
      id: 2,
      title: 'React is not that',
      content:
        'He was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th century music.',
      created: '5 days ago',
      twitterName: 'dan_abramov',
    },
    {
      id: 3,
      title: 'I thought it would be',
      content:
        'An American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz.',
      created: '6 days ago',
      twitterName: 'mjackson',
    },
    {
      id: 4,
      title: 'Easier to leard and prettier to write',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum asperiores delectus officiis doloremque tenetur.',
      created: '6 days ago',
      twitterName: 'sarah_edo',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TWITTERS:
      return {
        ...state,
        twitters: action.payload,
      };
    default:
      return state;
  }
};
