import * as actionTypes from "./shopTypes";

export const setCategories = (categories) => {
	return {
		type: actionTypes.SET_CATEGORIES,
		payload: categories,
	};
};

export const setProducts = (products) => {
	return {
		type: actionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const loadCurrentProduct = (item) => {
	return {
		type: actionTypes.LOAD_CURRENT_PRODUCT,
		payload: item,
	};
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
