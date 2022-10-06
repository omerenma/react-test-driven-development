import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import TimerComponent from './Timer'

describe("App", () => {
  
	it("should render a <div />", () => {
		const container = shallow(<App />);
		expect(container.find("div").length).toEqual(1);
	});
});

// Check for the presence of a Timer component
describe("Timer Component", () => {
	it("should render with a <h1/> heading", () => {
		const wrapper = shallow(<TimerComponent />)
        expect(wrapper.containsMatchingElement(<div>Timer component</div>)).toEqual(true)
        expect(wrapper.prop('name')).toEqual('king')
	});
   
});
