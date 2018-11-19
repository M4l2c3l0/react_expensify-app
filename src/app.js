import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import StoreConfig from './store/store-config';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'react-dates/lib/css/_datepicker.css';
import './database/firebase';

const store = StoreConfig();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});