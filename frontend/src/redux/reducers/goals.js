import {
	FETCH_DATA,
	FETCH_SINGLE_DATE,
	POST_DATA,
	CLEANUP,
} from "../actions/type";

const initialState = {
	goals: [],
	goal: {},
	isLoading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CLEANUP:
			return {
				...state,
				goal: {},
				goals: [],
				isLoading: true,
			};
		case FETCH_DATA:
			return {
				...state,
				goals: action.payload,
				isLoading: false,
			};
		case FETCH_SINGLE_DATE:
			return {
				...state,
				goal: action.payload,
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
