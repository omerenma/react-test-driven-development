import React from "react";
import { shallow } from "enzyme";
import App from "../App/App";
import TimerComponent from "../App/Timer";
import TimerButton from "../App/TimerButton";

describe("App", () => {
	it("should render a <div />", () => {
		const container = shallow(<App />);
		expect(container.find("div").length).toEqual(1);
	});
});

// Check for the presence of a Timer component
// describe("Timer Component", () => {
// 	it("should render instances of the Timer component", () => {
// 		const wrapper = shallow(<TimerComponent />);
// 		expect(wrapper.containsMatchingElement(<div>Timer component</div>)).toEqual(true);
// 		expect(wrapper.prop("name")).toEqual("king");
// 	});
// });

// Check for the presence of TimerButton component
// describe("TimerButton component", () => {
// 	it("should render TimerButoon component", () => {
// 		const wrapper = shallow(<TimerButton />);
// 		expect(
// 			wrapper.containsAllMatchingElements([
// 				<button>Start</button>,
// 				<button>Stop</button>,
// 				<button>Reset</button>,
// 			])
// 		).toEqual(true);
// 	});
// });
