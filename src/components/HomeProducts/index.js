import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading } from "../../redux/shop/shopActions";
import "./index.scss";
import TabBest from "./TabBest";
import TabNew from "./TabNew";
import TabSale from "./TabSale";

function HomeProducts() {
	const [activeTab, setActiveTab] = useState(1);
	const dispatch = useDispatch();

	const products = useSelector((state) => state.shop.products);
	const totalRows = useSelector((state) => state.shop.totalRows);
	const loading = useSelector((state) => state.shop.loading);

	const onActiveTab = (tabIndex) => {
		dispatch(showLoading(true));
		setActiveTab(tabIndex);
	};

	useEffect(() => {
		dispatch(showLoading(true));
	}, [dispatch]);

	return (
		<div className="home-products grid">
			<ul className="home-products__actions">
				<li>
					<button
						className={activeTab === 1 ? "active" : ""}
						onClick={() => onActiveTab(1)}
					>
						Best Sellers
					</button>
				</li>

				<li>
					<button
						className={activeTab === 2 ? "active" : ""}
						onClick={() => onActiveTab(2)}
					>
						New Products
					</button>
				</li>
				<li>
					<button
						className={activeTab === 3 ? "active" : ""}
						onClick={() => onActiveTab(3)}
					>
						Sale Products
					</button>
				</li>
			</ul>

			<div className="home-products__list">
				{activeTab === 1 && (
					<TabBest
						products={products}
						loading={loading}
						totalRows={totalRows}
					/>
				)}
				{activeTab === 2 && (
					<TabNew products={products} loading={loading} totalRows={totalRows} />
				)}
				{activeTab === 3 && (
					<TabSale
						products={products}
						loading={loading}
						totalRows={totalRows}
					/>
				)}
			</div>
		</div>
	);
}

export default HomeProducts;
