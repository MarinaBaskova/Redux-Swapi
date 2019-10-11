// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_NEXT = 'FETCH_DATA_NEXT';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getCharacters = () => {
	return function(dispatch) {
		dispatch({ type: FETCH_DATA_START });
		axios
			.get('https://swapi.co/api/people')
			.then((res) => {
				console.log('SERVER RESPONSE IS: ', res);
				dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results });
			})
			.catch((err) => {
				dispatch({ type: FETCH_DATA_FAILURE, payload: err });
			});
	};
};

export const getNextCharacters = () => {
	return function(dispatch) {
		dispatch({ type: FETCH_DATA_START });
		axios
			.get('https://swapi.co/api/people/?page=2')
			.then((res) => {
				console.log('SERVER RESPONSE IS: ', res);
				dispatch({ type: FETCH_DATA_NEXT, payload: res.data.results });
			})
			.catch((err) => {
				dispatch({ type: FETCH_DATA_FAILURE, payload: err });
			});
	};
};
