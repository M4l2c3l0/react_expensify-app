import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/Expenses';
import expenses from '../fixtures/expenses';

test('should render Expenses with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list without items', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});