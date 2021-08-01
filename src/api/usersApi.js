import axiosClient from "./axiosClient";

// api/usersApi.js
const usersApi = {
	getUsers: (params) => {
		const url = "/users";
		return axiosClient.get(url, { params });
	},
	postUser: (user) => {
		const url = "/users";
		return axiosClient.post(url, user);
	},
};
export default usersApi;
