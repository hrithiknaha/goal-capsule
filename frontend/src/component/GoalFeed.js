import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData, cleanup } from "../redux/actions/goals";

function GoalFeed(props) {
	useEffect(() => {
		props.fetchData();

		return () => props.cleanup();
	}, []);

	return (
		<div>
			<h3>Goals</h3>
			{props.goals.isLoading ? (
				<p>Loading...</p>
			) : (
				props.goals.goals.map((goal) => {
					return (
						<div key={goal._id}>
							<p>
								<Link to={`/${goal._id}`}>{goal.name}</Link> -{" "}
								<span>{goal.priority}</span>
							</p>
							<ul>
								{goal.labels.map((label) => {
									return <li key={label}>{label}</li>;
								})}
							</ul>
						</div>
					);
				})
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	goals: state.goals,
});

export default connect(mapStateToProps, { fetchData, cleanup })(GoalFeed);
