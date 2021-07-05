import * as actionTypes from "./userTypes";

export const setUser = (user) => {
	return {
		type: actionTypes.SET_USER,
		payload: user,
	};
};
export const removeUser = () => {
	return {
		type: actionTypes.REMOVE_USER,
	};
};
