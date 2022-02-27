import axios from "axios";
import { FETCH_DATA, FETCH_SINGLE_DATE, POST_DATA } from "./type";

export const fetchData = () => (dispatch) => {
	axios.get("/api/goals").then(({ data }) => {
		dispatch({ type: FETCH_DATA, payload: data });
	});
};

export const fetchSingleData = (id) => (dispatch) => {
	console.log(id);
	axios.get(`/api/goals/${id}`).then(({ data }) => {
		dispatch({ type: FETCH_SINGLE_DATE, payload: data });
		console.log(data);
	});
};

export const postData = (body, navigate) => (dispatch) => {
	axios.post("/api/goals", body).then(({ data }) => {
		dispatch({ type: POST_DATA, payload: data });
		navigate(`/${data._id}`);
	});
};
