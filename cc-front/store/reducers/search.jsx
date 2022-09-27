import { ERASE_SEARCH, SET_SEARCH } from "../actions/data";

export const initialState ={
    list:''
}

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_SEARCH:{
			return{
				...state,
				list:action.payload
			}
		}
        case ERASE_SEARCH:{
            return{
                ...state,
                list:''
            }
        }
		default:
			return state;
	}
};

export default reducer;