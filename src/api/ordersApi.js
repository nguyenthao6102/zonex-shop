import axiosClient from "./axiosClient";

// api/ordersApi.js
const ordersApi = {
	getAll: (id) => {
		const url = `/users/${id}/orders`;
		return axiosClient.get(url);
	},
};
export default ordersApi;
