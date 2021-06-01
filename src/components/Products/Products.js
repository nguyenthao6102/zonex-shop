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
	const [categoryQuery, setCategoryQuery] = useState("");
	const [priceQuery, setPriceQuery] = useState("");
	const [brandQuery, setBrandQuery] = useState("");

	// sort value
	const [sort, setSort] = useState("");

	// pagination
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(12);
	const [totalRows, setTotalRows] = useState(undefined);

	let pagination = `_page=${page}&_limit=${limit}`;

	const fetchProducts = async () => {
		const response = await axios
			.get(
				`https://zonex-fake.herokuapp.com/api/${categoryQuery}products?${pagination}${priceQuery}${brandQuery}${sort}`
			)
			.catch((err) => {
				console.log("Error", err);
			});

		dispatch(setProducts(response.data.data));
		setTotalRows(response.data.pagination._totalRows);
	};

	useEffect(() => {
		fetchProducts();
	}, [categoryQuery, sort, priceQuery, brandQuery, page, limit, totalRows]); // eslint-disable-line react-hooks/exhaustive-deps

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
				categoryQuery={categoryQuery}
				setCategoryQuery={setCategoryQuery}
				sort={sort}
				setSort={setSort}
				priceQuery={priceQuery}
				setPriceQuery={setPriceQuery}
				brandQuery={brandQuery}
				setBrandQuery={setBrandQuery}
			/>

			<div className="products__list row">{showProducts(products)}</div>
			{limit >= totalRows ? (
				<div className="products__end">
					<span>Out of Products</span>
				</div>
			) : (
				<div className="products__more">
					<div
						onClick={() => {
							setPage(1);
							setLimit(limit + 8);
						}}
					>
						<span>Load More</span>
						<i className="fas fa-arrow-down"></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default Products;
