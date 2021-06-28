import * as actionTypes from "./usersTypes";

const initialState = [];

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USERS:
			return [...action.payload];
		case actionTypes.ADD_USER:
			return [...state, action.payload];
		default:
			return state;
	}
};
export default usersReducer;
