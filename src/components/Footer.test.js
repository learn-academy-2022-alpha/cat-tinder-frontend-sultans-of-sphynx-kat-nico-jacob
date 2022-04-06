// Imports React into our test file.
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'
Enzyme.configure({adapter: new Adapter()})

describe('When Footer renders', () => {
    it('displays a Footer', () => {
        const wrapper = shallow(<Footer/>);
        const navbarRendered = wrapper.find("Footer")
        expect(wrapper.length).toEqual(1)
    })
})
