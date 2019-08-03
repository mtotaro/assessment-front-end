import { INIT_GNOMES, SET_GNOMES, GNOMES_ERROR } from '../constants';
import gnomesApi from '../../api/gnomes';

export const initGnomes = () => dispatch => gnomesApi
  .data()
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
