import {
  INIT_GNOMES,
  SET_GNOMES,
  GNOMES_ERROR,
  SEARCH_GNOME,
  STOP_SEARCH,
  NEXT_PAGE,
} from '../constants';
import gnomesApi from '../../api/gnomes';

export const initGnomes = () => dispatch => gnomesApi.data
  .then((res) => {
    dispatch({
      type: INIT_GNOMES,
      payload: res,
    });
  })
  .catch((err) => {
    dispatch({ type: GNOMES_ERROR, payload: { error: err, params: '' } });
  });

export const setGnomes = gnomes => dispatch => dispatch({ type: SET_GNOMES, payload: { gnomes } });

export const searchGnome = search => dispatch => dispatch({ type: SEARCH_GNOME, payload: search });

export const stopSearch = () => dispatch => dispatch({ type: STOP_SEARCH });

export const nextPage = () => dispatch => dispatch({ type: NEXT_PAGE });
