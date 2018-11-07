import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>Add your first expense!</p>
      ) : (
        props.expenses.map((expense) => {
          <Expense key={expense.id} {...expense} />;
        })
      )
    }
    {props.expenses.map((expense) => {
      return <Expense {...expense} key={expense.id} />
    })}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);