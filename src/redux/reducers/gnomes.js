import { handleActions } from 'redux-actions';
import { SET_GNOMES } from '../constants';

const initialState = {
  gnomes: null,
};

const handleAddGnomes = (state, { payload }) => ({
  ...state,
  gnomes: [...state.gnomes, payload],
});

export default handleActions(
  {
    [SET_GNOMES]: handleAddGnomes,
  },
  initialState,
);
