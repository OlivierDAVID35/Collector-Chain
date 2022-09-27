import { SET_CATEGORIES } from "../actions/data";


export const initialState ={
    list:[]
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_CATEGORIES:{
			return{
				...state,
				list:action.payload
			}
		}

		default:
			return state;
	}
};

export default reducer;
