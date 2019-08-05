import { handleActions } from 'redux-actions';
import {
  INIT_GNOMES, SEARCH_GNOME, STOP_SEARCH, NEXT_PAGE,
} from '../constants';

const initialState = {
  brastlewark: null,
  searchgnomes: null,
  searched: false,
  pages: 1,
};

const selectItem = (state, { payload }) => ({
  ...state,
  searchgnomes: state.brastlewark.filter(item => item.name.toLowerCase().includes(payload.toLowerCase())),
  searched: true,
});

export default handleActions(
  {
    [INIT_GNOMES]: (state, { payload }) => ({
      ...state,
      brastlewark: payload.Brastlewark,
    }),
    [SEARCH_GNOME]: selectItem,
    [STOP_SEARCH]: state => ({
      ...state,
      searched: false,
    }),
    [NEXT_PAGE]: state => ({
      ...state,
      pagesShown: state.pages + 1,
    }),
  },
  initialState,
);
