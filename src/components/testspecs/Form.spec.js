import React from "react";
import UserForm from "../App/Form";
import { shallow, mount } from "enzyme";

describe("Userform", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<UserForm />);
	});
	// Shallow render the component
	it("it should have a header <h1/>", () => {
		expect(wrapper.contains(<h1>User form</h1>)).toBe(true);
	});
	it("it should render input filed with the matching attributes", () => {
		expect(wrapper.find("input").length).toBeGreaterThanOrEqual(1);
	});
	it("it should render a button", () => {
		expect(wrapper.containsMatchingElement(<button>Submit</button>)).toBe(true);
	});
	// Check to see that the button is disabled on initial render
	it("button is disabled on initial render", () => {
		expect(
			wrapper.containsMatchingElement(<button disabled={false}>Submit</button>)
		).toBe(true);
	});
});

describe("User form handle click", () => {
	let wrapper;
	const onClick = jest.fn();

	beforeEach(() => {
		wrapper = shallow(<UserForm />);
	});
	it("calls the `handleClick() function when button is clicked`", () => {
		// let click = wrapper.find('buutton').first();
		// expect(click.simulate()).toBe(true)
	});

	it("it renders a button with  id increament-btn", () => {
		expect(wrapper.find("#increament-btn").text()).toBe("Increament");
	});
	it("renders the initial value of the state at 0", () => {
		expect(wrapper.find("#counter").text()).toBe("0");
	});
	it("listens for button click event and update states by +1", () => {
		wrapper.find("#increament-btn").simulate("click");
		expect(wrapper.find("#counter").text()).toBe("1");
	});
    it("listens for button click event and update the state by -1", () => {
        wrapper.find("#increament-btn").simulate("click")
        expect(wrapper.find("#counter").text()).toBe("1")
        wrapper.find("#decreament-btn").simulate("click")
        expect(wrapper.find("#counter").text()).toBe("0")
    })
});
