import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Sentrii from './components/SentriiContainer';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <Sentrii />}
  </Provider>,
  document.getElementById('app')
);