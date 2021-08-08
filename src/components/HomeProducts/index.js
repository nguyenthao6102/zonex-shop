import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsApi from "../../api/productsApi";
import Loading from "../../common/components/Loading";
import { setProducts } from "../../redux/shop/shopActions";
import Product from "../Products/Product";
import "./index.scss";

function HomeProducts() {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);

	const [params, setParams] = useState({
		_page: 1,
		_limit: 10,
		bestSellers: true,
	});

	const [activeTab, setActiveTab] = useState(1);
	const [totalRows, setTotalRows] = useState(undefined);

	const onLoadMore = () => {
		setParams({ ...params, _limit: params._limit + 5 });
	};

	const onActiveTabChange = (tab) => {
		setActiveTab(tab);
		if (tab === 1) {
			setParams({ _page: 1, _limit: 10, bestSellers: true });
		}
		if (tab === 2) {
			setParams({ _page: 1, _limit: 10, new: true });
		}
		if (tab === 3) {
			setParams({ _page: 1, _limit: 10, oldPrice_ne: null });
		}
		setLoading(true);
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
		<div className="home-products grid">
			<ul className="home-products__actions">
				<li>
					<button
						className={activeTab === 1 ? "active" : ""}
						onClick={() => onActiveTabChange(1)}
					>
						Best Sellers
					</button>
				</li>

				<li>
					<button
						className={activeTab === 2 ? "active" : ""}
						onClick={() => onActiveTabChange(2)}
					>
						New Products
					</button>
				</li>
				<li>
					<button
						className={activeTab === 3 ? "active" : ""}
						onClick={() => onActiveTabChange(3)}
					>
						Sale Products
					</button>
				</li>
			</ul>

			{loading ? (
				<Loading />
			) : (
				<div className="home-products__list row">{showProducts(products)}</div>
			)}

			{params._limit >= totalRows && loading === false ? (
				<div className="home-products__end">
					<span>Out of Products</span>
				</div>
			) : (
				<div className="home-products__more">
					<div onClick={onLoadMore}>
						<span>Load More</span>
						<i className="fas fa-arrow-down"></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default HomeProducts;
