import axios from "axios";
import { FETCH_DATA, POST_DATA } from "./type";

export const fetchData = () => (dispatch) => {
	axios.get("/api/goals").then(({ data }) => {
		dispatch({ type: FETCH_DATA, payload: data });
	});
};

export const postData = (body) => (dispatch) => {
	axios.post("/api/goals", body).then(({ data }) => {
		dispatch({ type: POST_DATA, payload: data });
	});
};
