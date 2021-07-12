import * as actionTypes from "./authTypes";

export const setAuth = (user) => {
	return {
		type: actionTypes.SET_AUTH,
		payload: user,
	};
};
export const removeAuth = () => {
	return {
		type: actionTypes.REMOVE_AUTH,
	};
};
