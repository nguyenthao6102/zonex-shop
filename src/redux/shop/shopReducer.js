import * as actionTypes from "./shopTypes";

const initialState = {
	categories: [],
	products: [],
	currentProduct: {},
	showMessage: false,
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};

		case actionTypes.SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};

		case actionTypes.LOAD_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: action.payload,
			};
		case actionTypes.REMOVE_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: {},
			};
		case actionTypes.SHOW_MESSAGE:
			return {
				...state,
				showMessage: action.payload,
			};
		default:
			return state;
	}
};
export default shopReducer;
