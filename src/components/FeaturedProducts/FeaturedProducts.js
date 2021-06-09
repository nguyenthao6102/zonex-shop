import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/shop/shopActions";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import "./FeaturedProducts.scss";

function FeaturedProducts() {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	// pagination
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [totalRows, setTotalRows] = useState(undefined);

	let pagination = `_page=${page}&_limit=${limit}`;

	const onLoadMore = () => {
		setPage(1);
		setLimit(limit + 5);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios
				.get(
					`https://zonex-fake.herokuapp.com/api/products?${pagination}&featured=true`
				)
				.catch((err) => {
					console.log("Error", err);
				});
			dispatch(setProducts(response.data.data));
			setTotalRows(response.data.pagination._totalRows);
			setLoading(false);
		};
		fetchProducts();
	}, [dispatch, pagination]);

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

			{loading ? (
				<div className="featured-products__loading">Loading...</div>
			) : (
				<div className="featured-products__list row">
					{showProducts(products)}
				</div>
			)}

			{limit >= totalRows ? (
				<div className="featured-products__end">
					<span>Out of Products</span>
				</div>
			) : (
				<div className="featured-products__more">
					<div onClick={onLoadMore}>
						<span>Load More</span>
						<i className="fas fa-arrow-down"></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default FeaturedProducts;
