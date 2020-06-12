import React from 'react';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';

import './signInRegisterPage.scss';

const signInRegisterPage = () => (
    <div className='signInRegister'>
        <SignIn/>
        <SignUp/>
    </div>
)
export default signInRegisterPage;