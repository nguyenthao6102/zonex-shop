import * as actionTypes from "./cartTypes";

const data = JSON.parse(localStorage.getItem("CART"));

const initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const inCart = state.find((item) =>
				item.id === action.payload.item.id ? true : false
			);

			const newStateAdd = inCart
				? state.map((item) =>
						item.id === action.payload.item.id
							? { ...item, qty: item.qty + action.payload.qty }
							: item
				  )
				: [...state, { ...action.payload.item, qty: action.payload.qty }];
			localStorage.setItem("CART", JSON.stringify(newStateAdd));
			return newStateAdd;

		case actionTypes.REMOVE_FROM_CART:
			const newStateRemove = state.filter(
				(item) => item.id !== action.payload.id
			);
			localStorage.setItem("CART", JSON.stringify(newStateRemove));

			return newStateRemove;

		case actionTypes.CHANGE_QUANTITY_INPUT:
			const newStateChangeInput = state.map((item) =>
				item.id === action.payload.id
					? { ...item, qty: +action.payload.qty }
					: item
			);
			localStorage.setItem("CART", JSON.stringify(newStateChangeInput));

			return newStateChangeInput;

		case actionTypes.INCREASE_QUANTITY:
			const newStateIncrease = state.map((item) =>
				item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
			);
			localStorage.setItem("CART", JSON.stringify(newStateIncrease));

			return newStateIncrease;

		case actionTypes.DECREASE_QUANTITY:
			const newStateDecrease = state.map((item) =>
				item.id === action.payload.id
					? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty }
					: item
			);
			localStorage.setItem("CART", JSON.stringify(newStateDecrease));

			return newStateDecrease;
		default:
			return state;
	}
};
export default cartReducer;
