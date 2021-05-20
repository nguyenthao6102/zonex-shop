import * as actionTypes from "./shopTypes";

const initialState = {
	products: [
		{
			id: 1,
			name: "Nordic Half-zip Pullover",
			categories: "jacket",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD178_KA7663.jpg",
			price: 500,
		},
		{
			id: 2,
			name: "Band-collar Popover Tunic",
			categories: "clothes",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/L1848_WQ1476_d2-768x969.jpg",
			price: 800,
		},
		{
			id: 3,
			name: "Chambray Shirt In Vintage Indigo",
			categories: "jacket",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/G1394_DM1554-768x969.jpg",
			price: 1500,
		},
		{
			id: 4,
			name: "Balloon-sleeve Turtleneck Sweater",
			categories: "clothes",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/J6373_YL5461_m-768x969.jpg",
			price: 900,
		},
		{
			id: 5,
			name: "Thelma Penny Loafers",
			categories: "shoes",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/L1310_EC5461-768x969.jpg",
			price: 200,
		},
		{
			id: 6,
			name: "Cableknit Shawl-collar Cardigan",
			categories: "jacket",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD401_SU2811_m-768x969.jpg",
			price: 300,
		},
		{
			id: 7,
			name: "Tailored Indigo Jumpsuit",
			categories: "clothes",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/M0479_DM3205_m-768x969.jpg",
			price: 50000,
		},
		{
			id: 8,
			name: "A-line Midi Skirt In Leather",
			categories: "clothes",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/F4964_BL8133_m-768x969.jpg",
			price: 6000,
		},
		{
			id: 9,
			name: "Bikini Top In Suckered Rainbow Stripe",
			categories: "Swimmer",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/L6853_KA7868_m-768x969.jpg",
			price: 3500,
		},
		{
			id: 10,
			name: "Triple Stone Drop Earrings",
			categories: "jewelry",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD569_PK5353-768x969.jpg",
			price: 1500,
		},
		{
			id: 11,
			name: "Anna Tassel Earrings",
			categories: "jewelry",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/05/Rainbow-ear-768x768.jpg",
			price: 1200,
		},
		{
			id: 12,
			name: "Legend Sneaker In Corduroy",
			categories: "shoes",
			description:
				"We love the dramatic ruffle details down the sleeve, delicate fabric buttons and polished cuffs.",
			image:
				"https://zonex.famithemes.com/wp-content/uploads/2019/11/M2410_YL5486_d1-768x969.jpg",
			price: 400,
		},
	],
	cart: [],
	currentProduct: null,
};
const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: action.payload,
			};

		case actionTypes.ADD_TO_CART:
			const item = state.products.find(
				(product) => product.id === action.payload.id
			);
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
