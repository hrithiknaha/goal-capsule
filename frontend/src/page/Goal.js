import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSingleData } from "../redux/actions/goals";

function Goal(props) {
	let params = useParams();

	useEffect(() => {
		props.fetchSingleData(params.id);
	}, []);
	return <div>Journal</div>;
}

const mapStateToProps = (state) => ({
	goal: state.goals,
});
export default connect(mapStateToProps, { fetchSingleData })(Goal);
