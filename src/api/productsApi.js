import axiosClient from "./axiosClient";

// api/productsApi.js
const productsApi = {
	getList: (params) => {
		const url = "/products";
		return axiosClient.get(url, { params });
	},
	getByProductId: (id) => {
		const url = `/products/${id}`;
		return axiosClient.get(url);
	},
	searchByProductName: (name) => {
		const url = `/products/?name_like=${name}`;
		return axiosClient.get(url);
	},
};
export default productsApi;
