import React from 'react';

import './cart_dropdown.scss';
import CustomButton from '../button/button';

const CartDropdown = () => (
    <div className='dropdown'>
        <div className='items'></div>
        <CustomButton className='button'>GO TO PAYMENT</CustomButton>
    </div>
)
export default CartDropdown;