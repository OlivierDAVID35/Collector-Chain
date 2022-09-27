import { SET_PROPERTIES } from "../actions/data";

export const initialState ={
    list:['color', 'size','mechanism','glass']
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_PROPERTIES:{
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