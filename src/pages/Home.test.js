// Imports React into our test file.
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
Enzyme.configure({adapter: new Adapter()})

describe('When Home page renders', () => {
    it('displays Cat Tinder Heading', () => {
        const wrapper = shallow(<Home/>);
        const headingRender = wrapper.find(<h1>CAT TINDER</h1>)
        expect(wrapper.length).toEqual(1)
    })
})
