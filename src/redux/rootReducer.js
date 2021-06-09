import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import shopReducer from "./shop/shopReducer";
const rootReducer = combineReducers({
	shop: shopReducer,
	cart: cartReducer,
});
export default rootReducer;
