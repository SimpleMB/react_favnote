import { SWITCH_PAGE_TYPE } from 'actions/types';

const initialState = {
  pageType: 'notes',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_PAGE_TYPE:
      return {
        ...state,
        pageType: action.payload,
      };

    default:
      return state;
  }
};
