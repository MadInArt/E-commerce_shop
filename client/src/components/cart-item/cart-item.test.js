import React from "react";
import CartItem from "./cart-item";
import { shallow } from "enzyme";

describe("CartItem tests", () => {

        const mockItem = {
            imageUrl: 'www.testImage.com',
            name: 'CoolItem',
            price: 22,
            quantity : 2
        }
  test("expect CartItem renders properly", () => {
    expect(shallow(<CartItem cartItem={mockItem} />)).toMatchSnapshot();
  }); 
});
