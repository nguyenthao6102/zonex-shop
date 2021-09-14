import Product from "../components/Product";

export const showProducts = (products) => {
	let result = null;
	if (products.length > 0) {
		result = products.map((product, index) => {
			return <Product key={product.id} product={product} />;
		});
	}
	return result;
};
