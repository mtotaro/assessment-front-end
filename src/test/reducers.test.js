import reducer from '../redux/reducers/gnomes';
import * as constants from '../redux/constants';
import * as mocks from './mocks';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(mocks.initialState);
  });


  describe('SET_GNOMES', () => {
    test('returns the correct state', () => {
      const action = { type: constants.SET_GNOMES, payload: mocks.brastlewark };
      const expectedState = {
        brastlewark: null, pages: 1, searched: false, searchgnomes: null,
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });


  it('should filter gnomes on SEARCH_GNOME action & set serching to true', () => {
    expect(
      reducer(
        {
          brastlewark: mocks.brastlewark,
          searchgnomes: null,
          searched: false,
          pages: 1,
        },
        {
          type: constants.SEARCH_GNOME,
          payload: mocks.searchInput,
        },
      ),
    ).toEqual({
      brastlewark: mocks.brastlewark,
      searchgnomes: mocks.searchResults,
      searched: true,
      pages: 1,
    });
  });

  it('should set searching to false on STOP_SEARCH action', () => {
    expect(
      reducer(
        {
          brastlewark: mocks.brastlewark,
          searchgnomes: mocks.searchgnomes,
          searched: true,
          pages: 1,
        },
        {
          type: constants.STOP_SEARCH,
        },
      ),
    ).toEqual({
      brastlewark: mocks.brastlewark,
      searchgnomes: mocks.searchgnomes,
      searched: false,
      pages: 1,
    });
  });

  it('should increase 1 pagesShown on LOAD_NEXT_PAGE', () => {
    expect(
      reducer(mocks.initialState, {
        type: constants.NEXT_PAGE,
      }),
    ).toEqual({
      ...mocks.initialState,
      pages: 2,
    });
  });
});
