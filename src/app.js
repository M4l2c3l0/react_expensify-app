import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import StoreConfig from './store/store-config';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/app.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = StoreConfig();

store.dispatch(addExpense({ description: 'Water Bill', amount: 87 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1300000 }));


const state = store.getState();
const visibleExpenses = getExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));