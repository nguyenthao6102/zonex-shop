import "./Products.scss";
import React from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product";

Products.propTypes = {};

function Products(props) {
	return (
		<div className="products grid">
			<div className="row">
				<div className="products__category">
					<div className="products__title active">Best Sellers</div>
					<div className="products__title">New Products</div>
					<div className="products__title">Sale Products</div>
				</div>
			</div>

			<div className="products__list row">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
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
