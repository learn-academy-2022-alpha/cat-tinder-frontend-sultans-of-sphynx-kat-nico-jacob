// Imports React into our test file.
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({adapter: new Adapter()})

describe('When Header renders', () => {
    it('displays a navbar', () => {
        const wrapper = shallow(<Header/>);
        const navbarRendered = wrapper.find("NavBar")
        expect(wrapper.length).toEqual(1)
    })
})
