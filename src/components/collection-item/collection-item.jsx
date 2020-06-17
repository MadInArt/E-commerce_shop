import React from "react";
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-action';
import CustomButton from '../button/button';
import "./collection-item.scss";

const CollectionItem = ({addItem, item }) => {

  const {name, price, imageUrl} = item;
  return(
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <span className="name">{name}</span>
      <span className="price">{`${price}zł`}</span>
    </div>
    <CustomButton onClick={()=> addItem(item)} reversed>Add to cart</CustomButton>
  </div>
);}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
