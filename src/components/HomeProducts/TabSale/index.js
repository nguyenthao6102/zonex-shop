import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../../common/components/Loading";
import { setProducts } from "../../../redux/shop/shopActions";
import { showProducts } from "../../../util";
import "./index.scss";

function TabSale({ products, loading, totalRows }) {
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
		dispatch(setProducts(params));
	}, [dispatch, params]);

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
