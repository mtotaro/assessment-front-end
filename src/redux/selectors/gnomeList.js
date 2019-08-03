import { createSelector } from 'reselect';

export const gnomeListSelector = createSelector(
  state => state.gnomes.brastlewark,
  list => list,
);
