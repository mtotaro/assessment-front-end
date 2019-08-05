import { createSelector } from 'reselect';

export const gnomeListSelector = createSelector(
  state => (state.gnomes.searchgnomes ? state.gnomes.searchgnomes : state.gnomes.brastlewark),
  list => list,
);

export const gnomeInformationSelector = createSelector(
  [gnomeListSelector, (state, props) => props],
  (list, id) => (list ? list.find(u => u.id == id) : null),
);

export const pagesSelector = createSelector(
  state => state.gnomes.pages,
  pagesS => pagesS,
);
