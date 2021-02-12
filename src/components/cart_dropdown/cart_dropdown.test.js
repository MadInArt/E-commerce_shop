import React from "react";
import { shallow } from "enzyme";

import { CartDropdown } from "./cart_dropdown";
import CartItem from "../cart-item/cart-item";

import { setToggleCart } from "../../redux/cart/cart-action";

describe("CartDropdown component", () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch,
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  test("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call history.push when button is clicked", () => {
    wrapper.find("CartDropdownButton").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(setToggleCart());
  });

  test("should render an equal number of CartItem components as the cartItems prop", () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  test("should render EmptyMessageContainer if cartItems is empty", () => {
    const newmockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch,
    };

    const newWrapper = shallow(<CartDropdown {...newmockProps} />);
    expect(newWrapper.exists("EmptyMessageContainer")).toBe(true);
  });
});
