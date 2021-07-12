import * as actionTypes from "./authTypes";

const data = JSON.parse(localStorage.getItem("AUTH"));
const initialState = data ? data : null;

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_AUTH:
			localStorage.setItem("AUTH", JSON.stringify(action.payload));
			return action.payload;
		case actionTypes.REMOVE_AUTH:
			localStorage.removeItem("AUTH");
			return null;
		default:
			return state;
	}
};
export default authReducer;
