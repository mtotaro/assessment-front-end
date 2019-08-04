import { createSelector } from 'reselect';

export const gnomeListSelector = createSelector(
  state => state.gnomes.brastlewark,
  list => list,
);

export const gnomeInformationSelector = createSelector(
  [gnomeListSelector, (state, props) => props],
  (list, id) => (list ? list.find(u => u.id == id) : null),
);
