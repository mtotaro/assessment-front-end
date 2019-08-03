import { handleActions } from 'redux-actions';
import { INIT_GNOMES } from '../constants';

const initialState = {
  brastlewark: null,
};

export default handleActions(
  {
    [INIT_GNOMES]: (state, { payload }) => ({
      ...state,
      brastlewark: payload.Brastlewark,
    }),
  },
  initialState,
);
