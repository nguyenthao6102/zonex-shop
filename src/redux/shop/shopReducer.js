import * as actionTypes from "./shopTypes";

const initialState = {
	categories: [],
	products: [],
	cart: [],
	currentProduct: {},
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

		case actionTypes.ADD_TO_CART:
			const item =
				state.products.length === 0
					? state.currentProduct
					: state.products.find((product) => product.id === action.payload.id);
			const inCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false
			);
			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + action.payload.qty }
								: item
					  )
					: [...state.cart, { ...item, qty: action.payload.qty }],
			};

		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};

		case actionTypes.CHANGE_QUANTITY_INPUT:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, qty: +action.payload.qty }
						: item
				),
			};

		case actionTypes.INCREASE_QUANTITY:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
				),
			};

		case actionTypes.DECREASE_QUANTITY:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty }
						: item
				),
			};

		default:
			return state;
	}
};
export default shopReducer;
