import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
	shop: shopReducer,
	cart: cartReducer,
	user: userReducer,
});
export default rootReducer;
