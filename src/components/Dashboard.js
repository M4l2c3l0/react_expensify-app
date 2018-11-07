import React from 'react';
import Expenses from './Expenses';
import ExpensesFilters from './ExpensesFilters';

const Dashboard = () => (
  <div>
    <ExpensesFilters />
    <Expenses />
  </div>
);

export default Dashboard;