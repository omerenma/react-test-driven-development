import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../App/style/Form.css";

const UserForm = () => {
	const [disable, setDisabled] = useState(false);
    const [counter, setCounter] = useState(0)
	const [input, setInput] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};
	const handleClick = (e) => {
		console.log(e);
	};
	return (
		<div className="form">
			<h1>User form</h1>
			<form className="container">
				<div className="item">
					{/* <label>First name</label> */}
					<input
						placeholder="Firstname"
						value={input.firstname}
						name="firstname"
						onChange={handleChange}
					/>
				</div>
				<div className="item">
					{/* <label>Last name</label> */}
					<input
						placeholder="Lastname"
						value={input.lastname}
						name="lastname"
						onChange={handleChange}
					/>
				</div>
				<div className="item">
					{/* <label>Email</label> */}
					<input
						placeholder="Email"
						value={input.email}
						name="email"
						onChange={handleChange}
					/>
				</div>
				{/* <label>Password</label> */}
				<input
					placeholder="Password"
					value={input.password}
					name="password"
					onChange={handleChange}
				/>
			</form>
			<div>
				<button disabled={disable} className="submit" onClick={handleClick}>
					Submit
				</button>
			</div>
			<div>
				<div id="counter">{counter}</div>
				<button id="increament-btn" onClick={() =>setCounter(counter + 1)}>Increament</button>
                <button id="decreament-btn" onClick={() =>setCounter(counter - 1)}>Decreament</button>
			</div>
		</div>
	);
};
export default UserForm;
