import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSingleData, cleanup } from "../redux/actions/goals";

function Goal(props) {
	let params = useParams();

	useEffect(() => {
		props.fetchSingleData(params.id);

		return () => props.cleanup();
	}, [props.fetchSingleData]);
	return (
		<div>
			<h1>Journal</h1>
			{props.goal.isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<h3>{props.goal.goal.name}</h3>
					<span>{props.goal.goal.priority}</span>
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
export default connect(mapStateToProps, { fetchSingleData, cleanup })(Goal);
