import * as actionTypes from "./usersTypes";

export const setUsers = (users) => {
	return {
		type: actionTypes.SET_USERS,
		payload: users,
	};
};
export const addUser = (user) => {
	return {
		type: actionTypes.ADD_USER,
		payload: user,
	};
};
