import React from 'react';
import {Directory} from './directory';
import { shallow } from 'enzyme';

describe(' Directory component', ()=>{
    test("should render Directory component", ()=>{
        expect(shallow(<Directory sections={[]}/>)).toMatchSnapshot()
    })
})