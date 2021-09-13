import * as actionTypes from "./shopTypes";

const initialState = {
	categories: [],
	products: [],
	orders: [],
	currentProduct: {},
	showMessage: false,
	showModalProduct: false,
	totalRows: null,
	loading: true,
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
				products: action.payload.data,
				totalRows: action.payload.pagination._totalRows,
				loading: false,
			};

		case actionTypes.SET_ORDERS:
			return {
				...state,
				orders: action.payload,
				loading: false,
			};

		case actionTypes.LOAD_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: action.payload,
				loading: false,
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

		case actionTypes.SHOW_MODAL_PRODUCT:
			return {
				...state,
				showModalProduct: action.payload,
			};

		case actionTypes.SHOW_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};
export default shopReducer;
