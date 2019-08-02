import { combineReducers } from 'redux';

const reducers = {};

const aplicationReducers = combineReducers({
  ...reducers,
});

const rootReducer = (state, action) => {
  if (action.type === '') {
    // No se esta violando ningun principio de redux
    // https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
    return aplicationReducers(undefined, action);
  }
  return aplicationReducers(state, action);
};

export default rootReducer;
