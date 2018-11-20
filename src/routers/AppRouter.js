import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import Edit from '../components/Edit';
import NotFound from '../components/NotFound';
import Login from '../components/Login';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/add" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;