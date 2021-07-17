import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/shop/shopActions";
import HomeProduct from "./HomeProduct/HomeProduct";
import "./HomeProducts.scss";

function HomeProducts() {
	const products = useSelector((state) => state.shop.products);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState(1);
	const [endpoint, setEndpoint] = useState("&bestSellers=true");

	// pagination
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [totalRows, setTotalRows] = useState(undefined);

	let pagination = `_page=${page}&_limit=${limit}`;

	const onActiveTabChange = (tab, content) => {
		setActiveTab(tab);
		setEndpoint(content);
	};

	const onLoadMore = () => {
		setPage(1);
		setLimit(limit + 5);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios
				.get(
					`https://zonex-fake.herokuapp.com/api/products?${pagination}${endpoint}`
				)
				.catch((err) => {
					console.log("Error", err);
				});
			dispatch(setProducts(response.data.data));
			setTotalRows(response.data.pagination._totalRows);
			setLoading(false);
		};
		fetchProducts();
	}, [dispatch, pagination, endpoint]);

	const showProducts = () => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return <HomeProduct key={product.id} product={product} />;
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
						onClick={() => onActiveTabChange(1, "&bestSellers=true")}
					>
						Best Sellers
					</button>
				</li>

				<li>
					<button
						className={activeTab === 2 ? "active" : ""}
						onClick={() => onActiveTabChange(2, "&new=true")}
					>
						New Products
					</button>
				</li>
				<li>
					<button
						className={activeTab === 3 ? "active" : ""}
						onClick={() => onActiveTabChange(3, "&oldPrice_ne=null")}
					>
						Sale Products
					</button>
				</li>
			</ul>

			{loading ? (
				<div className="home-products__loading">Loading...</div>
			) : (
				<div className="home-products__list row">{showProducts(products)}</div>
			)}

			{limit >= totalRows ? (
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
