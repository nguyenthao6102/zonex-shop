import axiosClient from "./axiosClient";

// api/productsApi.js
const productsApi = {
	getAll: (params) => {
		const url = "/products";
		return axiosClient.get(url, { params });
	},
	get: (id) => {
		const url = `/products/${id}`;
		return axiosClient.get(url);
	},
	search: (value) => {
		const url = `/products/?name_like=${value}`;
		return axiosClient.get(url);
	},
};
export default productsApi;
