import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Switch, Redirect, BrowserRouter,
} from 'react-router-dom';
import store from './redux/store';
import './App.css';
import GnomeContainer from './containers/GnomeContainer';
import GnomeInformationContainer from './containers/GnomeInformationContainer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/gnome/:id" component={GnomeInformationContainer} />
          <Route path="/" component={GnomeContainer} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
