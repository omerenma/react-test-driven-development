import React from 'react'
import { shallow } from 'enzyme'
import Timer from '../App/Timer'


describe("Timer", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Timer />)
    })

    it("should render Timer", () => {
        expect(wrapper.containsMatchingElement(<div>Timer component</div>)).toEqual(true);
		expect(wrapper.prop("name")).toEqual("king");
    })
})