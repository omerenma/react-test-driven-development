import React from "react";
import { shallow } from "enzyme";
import TimerButton from "../App/TimerButton";

describe("TimerButton", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<TimerButton buttonAction={jest.fn()} buttonValue={""} />
		);
	});
	it("should render a <div />", () => {
		expect(wrapper.find("div").length).toBeGreaterThanOrEqual(1);
	});
});
