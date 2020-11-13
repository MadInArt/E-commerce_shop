import React from "react";
import {CollectionItem} from "./collection-item";
import { shallow } from "enzyme";

describe('CollectionItem component', () => {
    let wrapper;
    let mockAddItem;
    const mockName = 'SuperItem';
    const mockPrice =  20;
    const imageUrl = 'www.coolItemimage.com';


  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });
 
  test('should render CollectionItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should call AddItem when AddButton been clicked', () => {
      wrapper.find('AddButton').simulate('click')
      expect(mockAddItem).toHaveBeenCalled();
  });
    test('should render the price in PriceContainer', () => {
     const price = parseInt(wrapper.find('PriceContainer').text())
      expect(price).toBe(mockPrice);
  });
     test('should render the name in NameContainer', () => {
      expect(wrapper.find('NameContainer').text()).toBe(mockName);
  });
     test('should render the image in BackgroundImageCOntainer', () => {
      expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(imageUrl);
  });

});