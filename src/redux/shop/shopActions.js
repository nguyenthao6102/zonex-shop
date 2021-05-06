import * as actionTypes from "./shopTypes";

export const loadCurrentProduct = (itemID) => {
	return {
		type: actionTypes.LOAD_CURRENT_PRODUCT,
		payload: {
			id: itemID,
		},
	};
};
export const addToCart = (itemID) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: itemID,
		},
	};
};
export const removeFromCart = (itemID) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			id: itemID,
		},
	};
};

export const changeQuantity = (itemId, value) => {
	return {
		type: actionTypes.CHANGE_QUANTITY_INPUT,
		payload: {
			id: itemId,
			qty: value,
		},
	};
};
export const increaseQuantity = (itemId) => {
	return {
		type: actionTypes.INCREASE_QUANTITY,
		payload: {
			id: itemId,
		},
	};
};
export const decreaseQuantity = (itemId) => {
	return {
		type: actionTypes.DECREASE_QUANTITY,
		payload: {
			id: itemId,
		},
	};
};
