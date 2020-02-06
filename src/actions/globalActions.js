import { SWITCH_PAGE_TYPE } from 'actions/types';

export const switchPageType = pageType => ({
  type: SWITCH_PAGE_TYPE,
  payload: pageType,
});
