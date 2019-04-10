import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';
const initialState = {
	characters: [],
	isFetching: false,
	error: ''
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START: {
			return {
				...state,
				isFetching: true,
				error: ''
			};
		}
		case FETCH_DATA_SUCCESS: {
			return {
				...state,
				isFetching: false,
				error: ''
			};
		}
		case FETCH_DATA_FAILURE: {
			return {
				...state,
				isFetching: false,
				err: action.payload
			};
		}
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		default:
			return state;
	}
};
