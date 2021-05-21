import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import "./FeaturedProducts.scss";

FeaturedProducts.propTypes = {};

function FeaturedProducts(props) {
	const products = useSelector((state) => state.shop.products);
	const showProducts = () => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <FeaturedProduct key={product.id} product={product} />;
			});
		}
		return result;
	};

	return (
		<div className="featured-products grid">
			<h2 className="featured-products__title">Featured Products</h2>

			<div className="featured-products__list row">
				{showProducts(products)}
			</div>
			<div className="featured-products__more">
				<div>
					<span>Load More</span>
					<i className="fas fa-arrow-down"></i>
				</div>
			</div>
		</div>
	);
}

export default FeaturedProducts;
