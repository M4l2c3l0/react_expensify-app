import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import StoreConfig from './store/store-config';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './database/firebase';

let hasRendered = false;

const store = StoreConfig();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});