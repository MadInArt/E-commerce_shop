import React from 'react';

import './button.scss';

const CustomButton = ({children, isGoogleSignIn,reversed,...otherProps}) =>  (
<button className={`${reversed? 'reversed' : ''  }${isGoogleSignIn ? 'google-sign-in' : ''} button`}
    {...otherProps}>
    {children}
</button>
)

export default CustomButton;