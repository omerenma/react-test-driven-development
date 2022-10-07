import React, { useState } from "react";
import TimerButton from "./TimerButton";
// import "./TimerButton.css"
import "../Timer.css";

const Timer = () => {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [isOn, setIsOn] = useState(false);

	const startTimer = () => console.log("Starting timer");
	const stopTimer = () => console.log("Stopping timer");
	const resetTimer = () => console.log("Resetting timer");

	return (
		<div className="timer-container" name="king">
			<div>Timer component</div>
			<div className="timer-display"></div>
			<div className="timer-button-container">
				<TimerButton buttonAction={startTimer} buttonValue={"Start"} />
				<TimerButton buttonAction={stopTimer} buttonValue={"Stop"} />
				<TimerButton buttonAction={resetTimer} buttonValue={"Reset"} />
			</div>
		</div>
	);
};
export default Timer;
