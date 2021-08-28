import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsApi from "../../../api/productsApi";
import Loading from "../../../common/components/Loading";
import { setProducts } from "../../../redux/shop/shopActions";
import Product from "../../Products/Product";
import "./index.scss";

function TabSale({ loading, setLoading, totalRows, setTotalRows }) {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();

	const [params, setParams] = useState({
		_page: 1,
		_limit: 10,
		oldPrice_ne: null,
	});

	const onLoadMore = () => {
		setParams({ ...params, _limit: params._limit + 5 });
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await productsApi.getList(params);
				dispatch(setProducts(response.data));
				setTotalRows(response.pagination._totalRows);
				setLoading(false);
			} catch (error) {
				console.log("Failed to fetch products: ", error);
			}
		};

		fetchProducts();
	}, [dispatch, params, setLoading, setTotalRows]);

	const showProducts = (products) => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <Product key={product.id} product={product} />;
			});
		}
		return result;
	};

	return (
		<>
			{loading ? (
				<div className="tab-loading">
					<Loading />
				</div>
			) : (
				<div className="tab-sale row">{showProducts(products)}</div>
			)}

			{params._limit >= totalRows && loading === false ? (
				<div className="tab-end">
					<span>Out of Products</span>
				</div>
			) : (
				<div className="tab-more">
					<div onClick={onLoadMore}>
						<span>Load More</span>
						<i className="fas fa-arrow-down"></i>
					</div>
				</div>
			)}
		</>
	);
}

export default TabSale;
