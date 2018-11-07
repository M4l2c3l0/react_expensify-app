import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import Expense from '../../components/Expense';

test('should render list item with fixtures data', () => {
  const wrapper = shallow(<Expense {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});