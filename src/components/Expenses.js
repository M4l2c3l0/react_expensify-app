import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="mobile-only">Expenses</div>
      <div className="desktop-only">Expense</div>
      <div className="desktop-only">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>Enter your first expense</span>
          </div>
        ) : (
          props.expenses.map((expense) => {
            return <Expense key={expense.id} {...expense} />;
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);