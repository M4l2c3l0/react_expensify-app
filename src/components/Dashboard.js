import React from 'react';
import Expenses from './Expenses';
import ExpensesFilters from './ExpensesFilters';
import ExpensesSummary from './ExpensesSummary';

const Dashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpensesFilters />
    <Expenses />
  </div>
);

export default Dashboard;