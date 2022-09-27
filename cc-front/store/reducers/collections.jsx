import { SET_COLLECTIONS, SET_DISPLAYED_COLLECTION } from "../actions/data";

export const initialState = {
	list: [],
	displayedCollection: [],
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_COLLECTIONS: {
			return {
				...state,
				list: action.payload,
			};
		}
		case SET_DISPLAYED_COLLECTION: {
			return {
				...state,
				displayedCollection: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;
