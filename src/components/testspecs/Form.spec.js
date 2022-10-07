import React from "react";
import UserForm from "../App/Form";
import { shallow, mount } from "enzyme";

describe("Userform", () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<UserForm/>)
    })
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
			wrapper.containsMatchingElement(
            <button disabled={true}>
                Submit
            </button>
            )
		).toBe(true);
	});
});
