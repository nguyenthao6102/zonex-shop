import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
	shop: shopReducer,
	cart: cartReducer,
	users: usersReducer,
});
export default rootReducer;
