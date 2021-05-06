import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import "./Products.scss";

Products.propTypes = {};

function Products(props) {
	const products = useSelector((state) => state.shop.products);
	const showProducts = () => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product key={product.id} product={product} />;
			});
		}
		return result;
	};

	return (
		<div className="products grid">
			<div className="row">
				<div className="products__category">
					<div className="products__title active">Best Sellers</div>
					<div className="products__title">New Products</div>
					<div className="products__title">Sale Products</div>
				</div>
			</div>

			<div className="products__list row">{showProducts(products)}</div>
			<div className="products__more">
				<div>
					<span>Load More</span>
					<i className="fas fa-arrow-down"></i>
				</div>
			</div>
		</div>
	);
}

export default Products;
