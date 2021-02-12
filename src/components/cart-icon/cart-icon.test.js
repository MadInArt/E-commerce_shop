import React from "react";
import {CartIcon} from "./cart-icon";
import { shallow } from "enzyme";

describe('CartIcon component', () => {
  let wrapper;
  let mockSetToggleCart;
  beforeEach(() => {
    mockSetToggleCart = jest.fn();

    const mockProps = {
      itemCount: 0,
      setToggleCart: mockSetToggleCart
    }
    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  test('should render CartIcon component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartContainer').simulate('click');
    expect(mockSetToggleCart).toHaveBeenCalled();
  });

});