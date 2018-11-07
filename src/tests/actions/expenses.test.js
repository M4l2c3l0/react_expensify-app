import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('setup removeExpense action', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('setup editExpense action', () => {
  const action = editExpense('123abc', { notes: 'New text' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      notes: 'New text'
    }
  });
});

test('setup addExpense with custom values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 130000,
    createdAt: 1000,
    notes: 'my rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('setup addExpense with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      notes: '',
      amount: 0,
      createdAt: 0
    }
  });
});