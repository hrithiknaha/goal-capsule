import { FETCH_DATA, POST_DATA } from "../actions/type";

const initialState = {
	goals: [],
	goal: {},
	isLoading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				goals: action.payload,
				isLoading: false,
			};
		case POST_DATA:
			return {
				...state,
				goal: action.payload,
			};
		default:
			return state;
	}
}
