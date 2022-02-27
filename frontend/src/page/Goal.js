import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSingleData } from "../redux/actions/goals";

function Goal(props) {
	let params = useParams();

	useEffect(() => {
		props.fetchSingleData(params.id);
	}, []);
	return (
		<div>
			<h1>Journal</h1>
			{props.isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<h3>{props.goal.goal.name}</h3>
					<strong>Priority</strong> - <span>{props.goal.goal.priority}</span>
					{props.goal.goal.labels && (
						<ul>
							{props.goal.goal.labels.map((label) => {
								return <li key={label}>{label}</li>;
							})}
						</ul>
					)}
				</div>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	goal: state.goals,
});
export default connect(mapStateToProps, { fetchSingleData })(Goal);
