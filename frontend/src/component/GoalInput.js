import { useState } from "react";
import axios from "axios";
import { postData } from "../redux/actions/goals";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function GoalInput(props) {
	const [goal, setGoal] = useState();
	const [priority, setPriority] = useState();
	const [labels, setLabels] = useState();

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const body = {
			name: goal,
			priority,
			labels,
		};

		props.postData(body, navigate);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="goal">Goal</label>
				<input
					type="text"
					name="goal"
					id="goal"
					onChange={(e) => setGoal(e.target.value)}
				/>

				<input
					type="number"
					name="priority"
					id="priority"
					onChange={(e) => setPriority(e.target.value)}
				/>

				<input
					type="text"
					name="label"
					id="label"
					onChange={(e) => setLabels(e.target.value)}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => ({
	goals: state.goals,
});

export default connect(mapStateToProps, { postData })(GoalInput);
