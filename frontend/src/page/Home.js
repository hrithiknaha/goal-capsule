import React from "react";
import GoalFeed from "../component/GoalFeed";
import GoalInput from "../component/GoalInput";

function Home() {
	return (
		<div>
			<h1>Add Goal</h1>
			<GoalInput />
			<br />

			<GoalFeed />
		</div>
	);
}

export default Home;
