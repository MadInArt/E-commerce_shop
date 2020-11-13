import React from "react";
import {CheckoutItem} from "./checkoutitem";
import { shallow } from "enzyme";

describe("СheclkoutItem tests", () => {

    let wrapper;
    let mockClearItem;
    let mockIncreaseItemQuantity;
    let mockRemoveItem;

    beforeEach(()=>{
        mockIncreaseItemQuantity = jest.fn();
        mockClearItem = jest.fn();
        mockRemoveItem = jest.fn()

        const mockProps = {
        cartItem: {
            imageUrl: 'www.testImage.com',
            name: 'CoolItem',
            price: 22,
            quantity : 2
        }, 
        clearItem: mockClearItem,
        increaseItemQuantity: mockIncreaseItemQuantity,
        removeItem: mockRemoveItem
        }
        wrapper = shallow(<CheckoutItem {...mockProps} />)
    })
  test("expect CartItem renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  }); 
  test("should call clearItem when the button been clicked", () => {
    wrapper.find('RemoveButtonContainer').simulate('click')
    expect(mockClearItem).toHaveBeenCalled();
  }); 
   test("should increase quantity of items when rightArrow been clicked", () => {
    wrapper.find('QuantityContainer').childAt(2).simulate('click')
      
    expect(mockIncreaseItemQuantity).toHaveBeenCalled();
  }); 
  test("should decrease quantity of items when leftArrow been clicked", () => {
    wrapper.find('QuantityContainer').childAt(0).simulate('click')
    expect(mockRemoveItem).toHaveBeenCalled();
  }); 
});
