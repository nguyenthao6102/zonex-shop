import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "./index.scss";
import { setProducts } from "../../redux/shop/shopActions";
import Filter from "./Filter";
import productsApi from "../../api/productsApi";

function Products() {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	const [totalRows, setTotalRows] = useState(undefined);

	const [params, setParams] = useState({
		_page: 1,
		_limit: 12,
		categoryId: "",
		price_gte: "",
		price_lte: "",
		brands: "",
		_sort: "",
		_order: "",
	});

	const onLoadMore = () => {
		setParams({
			...params,
			_page: 1,
			_limit: params._limit + 8,
		});
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await productsApi.getList(params);

				dispatch(setProducts(response.data));
				setTotalRows(response.pagination._totalRows);
				setLoading(false);
			} catch (error) {
				console.log("Failed to fetch prodcuts");
			}
		};

		fetchProducts();
	}, [dispatch, params]);

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
			<Filter params={params} setParams={setParams} setLoading={setLoading} />
			{loading ? (
				<div className="products__loading">Loading...</div>
			) : (
				<div className="products__list row">{showProducts(products)}</div>
			)}

			{params._limit >= totalRows ? (
				<div className="products__end">
					<span>Out of Products</span>
				</div>
			) : (
				<div className="products__more">
					<div onClick={onLoadMore}>
						<span>Load More</span>
						<i className="fas fa-arrow-down"></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default Products;
