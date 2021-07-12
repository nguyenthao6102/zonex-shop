import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
	shop: shopReducer,
	cart: cartReducer,
	auth: authReducer,
});
export default rootReducer;
