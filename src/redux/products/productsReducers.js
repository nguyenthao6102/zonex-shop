const initialState = [
	{
		id: 1,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD178_KA7663-340x420.jpg",
		price: 500,
		inventory: 10,
		rating: 4,
	},
	{
		id: 2,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/L1848_WQ1476_d1-340x420.jpg",
		price: 800,
		inventory: 10,
		rating: 4,
	},
	{
		id: 3,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/G1394_DM1554-340x420.jpg",
		price: 1500,
		inventory: 10,
		rating: 4,
	},
	{
		id: 4,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/J6373_YL5461_m-340x420.jpg",
		price: 900,
		inventory: 10,
		rating: 4,
	},
	{
		id: 5,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/L1310_EC5461-340x420.jpg",
		price: 200,
		inventory: 10,
		rating: 4,
	},
	{
		id: 6,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD401_SU2811_m-340x420.jpg",
		price: 300,
		inventory: 10,
		rating: 4,
	},
	{
		id: 7,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/M0479_DM3205_m-340x420.jpg",
		price: 50000,
		inventory: 10,
		rating: 4,
	},
	{
		id: 8,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/F4964_BL8133_m-340x420.jpg",
		price: 6000,
		inventory: 10,
		rating: 4,
	},
	{
		id: 9,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/L6853_KA7868_d2-340x420.jpg",
		price: 3500,
		inventory: 10,
		rating: 4,
	},
	{
		id: 10,
		name: "Nordic Half-zip Pullover",
		image:
			"https://zonex.famithemes.com/wp-content/uploads/2019/11/AD569_PK5353-340x420.jpg",
		price: 1500,
		inventory: 10,
		rating: 4,
	},
];
const productsReducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT_TO_CART": {
			return state;
		}
		default:
			return state;
	}
};
export default productsReducers;
