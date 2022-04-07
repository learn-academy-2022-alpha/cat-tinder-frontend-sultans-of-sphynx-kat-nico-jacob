import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'
import mockCats from "../mockCats";
Enzyme.configure({adapter: new Adapter()})

describe("When CatShow renders", () => {
    it("displays a heading", () => {
        const catShow = shallow(<CatShow cat = {mockCats[0]} />)
        const catShowHeading = catShow.find("h1")
        expect(catShowHeading.text()).toEqual("Your kitty :)")
    })
})