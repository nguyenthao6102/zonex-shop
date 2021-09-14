import categoriesApi from "../../api/categoriesApi";
import ordersApi from "../../api/ordersApi";
import productsApi from "../../api/productsApi";
import * as actionTypes from "./shopTypes";

export const setCategories = () => async (dispatch) => {
	try {
		const result = await categoriesApi.getList();
		dispatch({
			type: actionTypes.SET_CATEGORIES,
			payload: result,
		});
	} catch (error) {
		console.log("Failed to fetch categories");
	}
};

export const setProducts = (params) => async (dispatch) => {
	try {
		const result = await productsApi.getList(params);
		dispatch({
			type: actionTypes.SET_PRODUCTS,
			payload: result,
		});
	} catch (error) {
		console.log("Failed to fetch products: ", error);
	}
};

export const setOrders = (userId) => async (dispatch) => {
	try {
		const result = await ordersApi.getListByUserId(userId);
		dispatch({
			type: actionTypes.SET_ORDERS,
			payload: result,
		});
	} catch (error) {
		console.log("Failed to fetch orders: ", error);
	}
};

export const loadCurrentProduct = (id) => async (dispatch) => {
	try {
		const result = await productsApi.getByProductId(id);
		dispatch({
			type: actionTypes.LOAD_CURRENT_PRODUCT,
			payload: result,
		});
	} catch (error) {
		console.log("Failed to fetch current product: ", error);
	}
};

export const removeCurrentProduct = () => {
	return {
		type: actionTypes.REMOVE_CURRENT_PRODUCT,
	};
};

export const showMessage = (show) => {
	return {
		type: actionTypes.SHOW_MESSAGE,
		payload: show,
	};
};

export const showModalProduct = (show) => {
	return {
		type: actionTypes.SHOW_MODAL_PRODUCT,
		payload: show,
	};
};

export const showLoading = (show) => {
	return {
		type: actionTypes.SHOW_LOADING,
		payload: show,
	};
};
