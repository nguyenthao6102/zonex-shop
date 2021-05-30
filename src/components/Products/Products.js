import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import Product from "./Product/Product";
import "./Products.scss";
import axios from "axios";
import { setProducts } from "../../redux/shop/shopActions";

Products.propTypes = {};

function Products() {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();
	// filter value
	const [categories, setCategories] = useState("");
	const [sort, setSort] = useState("");

	// pagination
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(12);
	let pagination = `page=${page}&limit=${limit}`;

	const fetchProducts = async () => {
		const response = await axios
			.get(
				`https://60a28a57745cd7001757758c.mockapi.io/api/v1/products/?${pagination}${categories}${sort}`
			)
			.catch((err) => {
				console.log("Error", err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, [categories, sort, page, limit]); // eslint-disable-line react-hooks/exhaustive-deps

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
			<Filter
				categories={categories}
				setCategories={setCategories}
				sort={sort}
				setSort={setSort}
			/>

			<div className="products__list row">{showProducts(products)}</div>
			<div className="products__more">
				<div
					onClick={() => {
						setPage(1);
						setLimit(limit + 18);
					}}
				>
					<span>Load More</span>
					<i className="fas fa-arrow-down"></i>
				</div>
			</div>
		</div>
	);
}

export default Products;
