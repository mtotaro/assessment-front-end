/* eslint no-underscore-dangle: "off" */
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import localForage from 'localforage';
import reducers from '../reducers';
import middlewares from '../middlewares';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares, logger));

const store = createStore(reducers, initialState, enhancer);

export const persistedStore = persistStore(store, {
  storage: localForage,
});

export default store;
