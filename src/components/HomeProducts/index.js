import React, { useState } from "react";
import "./index.scss";
import TabBest from "./TabBest";
import TabNew from "./TabNew";
import TabSale from "./TabSale";

function HomeProducts() {
	const [activeTab, setActiveTab] = useState(1);
	const [loading, setLoading] = useState(true);
	const [totalRows, setTotalRows] = useState(undefined);

	const onActiveTab = (tabIndex) => {
		setActiveTab(tabIndex);
		setLoading(true);
	};

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
						loading={loading}
						setLoading={setLoading}
						totalRows={totalRows}
						setTotalRows={setTotalRows}
					/>
				)}
				{activeTab === 2 && (
					<TabNew
						loading={loading}
						setLoading={setLoading}
						totalRows={totalRows}
						setTotalRows={setTotalRows}
					/>
				)}
				{activeTab === 3 && (
					<TabSale
						loading={loading}
						setLoading={setLoading}
						totalRows={totalRows}
						setTotalRows={setTotalRows}
					/>
				)}
			</div>
		</div>
	);
}

export default HomeProducts;
