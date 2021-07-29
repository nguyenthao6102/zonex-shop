import axiosClient from "./axiosClient";

// api/usersApi.js
const usersApi = {
	get: (params) => {
		const url = "/users";
		return axiosClient.get(url, { params });
	},
	post: (data) => {
		const url = "/users";
		return axiosClient.post(url, data);
	},
};
export default usersApi;
