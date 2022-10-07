import React from "react";
import "../App/App.css";
import Timer from "./Timer";
import UserForm from "./Form";
const App = () => {
	return (
		<div className="app-container">
			{/* <h1>New React TDD</h1> */}
			<UserForm />
            {/* <Timer /> */}
		</div>
	);
};
export default App;
