import { SET_TAGS } from "../actions/data";

export const initialState ={
    list:['red', 'blue','green','big', 'small']
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_TAGS:{
			return {
				...state,
				list:action.payload
			}
		}
		default:
			return state;
	}
};

export default reducer;