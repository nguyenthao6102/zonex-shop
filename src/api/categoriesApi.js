import axiosClient from "./axiosClient";

// api/categoiesApi.js
const categoriesApi = {
	getList: (params) => {
		const url = "/categories";
		return axiosClient.get(url, { params });
	},
};
export default categoriesApi;
