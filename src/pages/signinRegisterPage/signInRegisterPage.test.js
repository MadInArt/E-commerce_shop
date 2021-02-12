import React from 'react';
import { shallow } from 'enzyme';
import signInRegisterPage from './signInRegisterPage';

test('should render signInRegisterPage component', () => {
  expect(shallow(<signInRegisterPage />)).toMatchSnapshot();
});