// Imports React into our test file.
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
Enzyme.configure({adapter: new Adapter()})

describe('When an incorrect link is entered', () => {
    it('displays a Not Found Heading', () => {
        const wrapper = shallow(<NotFound/>);
        const navbarRendered = wrapper.find(<h1>Not Found</h1>)
        expect(wrapper.length).toEqual(1)
    })
})
