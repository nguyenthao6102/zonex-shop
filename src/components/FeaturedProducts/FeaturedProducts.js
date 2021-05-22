import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/shop/shopActions";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import "./FeaturedProducts.scss";

FeaturedProducts.propTypes = {};

function FeaturedProducts(props) {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get("https://60a28a57745cd7001757758c.mockapi.io/api/v1/products")
			.catch((err) => {
				console.log("Error", err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const showProducts = () => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return product.featured ? (
					<FeaturedProduct key={product.id} product={product} />
				) : undefined;
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
