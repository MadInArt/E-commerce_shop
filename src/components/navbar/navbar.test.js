import React from "react";
import { shallow } from "enzyme";

import { Navbar } from "./navbar";
import { CartDropdown } from "../cart_dropdown/cart_dropdown";

describe("Navbar component tests", () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: "123",
      },
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Navbar {...mockProps} />);
  });

  test("should render Navbar component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if currentUser is null", () => {
    test("should render sign in link", () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Navbar {...mockProps} />);

      expect(newWrapper.find("OptionLink").at(2).text()).toBe("SIGN IN");
    });
  });

  describe("if hidden is true", () => {
    test("should not render CartDropdown", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });
});
