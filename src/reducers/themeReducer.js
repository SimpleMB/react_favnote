import { SWITCH_THEME } from 'actions/types';

const initialState = {
  themeLight: true,

  theme: {
    notes: 'hsl(49, 100%, 58%)',
    twitters: 'hsl(196, 83%, 75%)',
    articles: 'hsl(106, 47%, 64%)',
    grey100: 'hsl(0, 0%, 96%)',
    grey200: 'hsl(0, 0%, 90%)',
    background: 'hsl(100, 100%, 100%)',
    black: 'hsl(0, 0%, 0%)',
    light: '300',
    bold: '600',
    fontSize: {
      xxs: '1rem',
      xs: '1.2rem',
      s: '1.6rem',
      m: '2.1rem',
      l: '2.4rem',
      xl: '4rem',
    },
  },
  lightTheme: {
    notes: 'hsl(49, 100%, 58%)',
    twitters: 'hsl(196, 83%, 75%)',
    articles: 'hsl(106, 47%, 64%)',
    grey100: 'hsl(0, 0%, 96%)',
    grey200: 'hsl(0, 0%, 90%)',
    background: 'hsl(100, 100%, 100%)',
    black: 'hsl(0, 0%, 0%)',
    light: '300',
    bold: '600',
    fontSize: {
      xxs: '1rem',
      xs: '1.2rem',
      s: '1.6rem',
      m: '2.1rem',
      l: '2.4rem',
      xl: '4rem',
    },
  },
  darkTheme: {
    notes: '#ffd700',
    twitters: '#2c786c',
    articles: '#ee8572',
    grey100: 'hsl(0, 0%, 96%)',
    grey200: 'hsl(0, 0%, 90%)',
    mainBackground: '#022c43',
    cardBackground: '#053f5e',
    black: 'hsl(0, 0%, 0%)',
    light: '300',
    bold: '600',
    fontSize: {
      xxs: '1rem',
      xs: '1.2rem',
      s: '1.6rem',
      m: '2.1rem',
      l: '2.4rem',
      xl: '4rem',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: state.themeLight ? state.darkTheme : state.lightTheme,
        themeLight: !state.themeLight,
      };

    default:
      return state;
  }
};
