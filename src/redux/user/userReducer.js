import * as actionTypes from "./userTypes";

const initialState = null;

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return action.payload;
		case actionTypes.REMOVE_USER:
			return null;
		default:
			return state;
	}
};
export default userReducer;
