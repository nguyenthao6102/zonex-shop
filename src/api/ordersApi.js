import axiosClient from "./axiosClient";

// api/ordersApi.js
const ordersApi = {
	getListByUserId: (id) => {
		const url = `/users/${id}/orders`;
		return axiosClient.get(url);
	},
	postOrder: (order) => {
		const url = `/orders`;
		return axiosClient.post(url, order);
	},
};
export default ordersApi;
