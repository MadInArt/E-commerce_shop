import React from 'react';

import './button.scss';

const CustomButton = ({children, ...otherProps}) =>  (
<button className='button'>
    {children}
</button>
)

export default CustomButton;