import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import GnomeContainer from './containers/GnomeContainer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <GnomeContainer />
    </div>
  </Provider>
);

export default App;
