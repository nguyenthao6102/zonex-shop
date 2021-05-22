import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import Product from "./Product/Product";
import "./Products.scss";
import axios from "axios";
import { setProducts } from "../../redux/shop/shopActions";

Products.propTypes = {};

function Products(props) {
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
				return <Product key={product.id} product={product} />;
			});
		}
		return result;
	};

	return (
		<div className="products grid wide">
			<Filter />

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
