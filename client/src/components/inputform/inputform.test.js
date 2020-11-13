  
import React from 'react';
import { shallow } from 'enzyme';

import InputForm from './inputform';

describe('InputForm component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: 'test1@gmail.com',
      onChangeHandle: mockHandleChange
    };

    wrapper = shallow(<InputForm {...mockProps} />);
  });

  test('should render InputForm component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleChange method when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  test('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  });

  test('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test1@gmail.com',
      onChangeHandle: mockHandleChange
    };

    const newWrapper = shallow(<InputForm {...mockNewProps} />);

    expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });
});