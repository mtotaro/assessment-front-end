import { handleActions } from 'redux-actions';
import { INIT_GNOMES, SEARCH_GNOME } from '../constants';

const initialState = {
  brastlewark: null,
  searchgnomes: null,
  searched: false,
};

const selectItem = (state, { payload }) => ({
  ...state,
  searchgnomes: state.brastlewark.filter(item => item.name.toLowerCase().includes(payload.toLowerCase())),
});

export default handleActions(
  {
    [INIT_GNOMES]: (state, { payload }) => ({
      ...state,
      brastlewark: payload.Brastlewark,
    }),
    [SEARCH_GNOME]: selectItem,
  },
  initialState,
);
