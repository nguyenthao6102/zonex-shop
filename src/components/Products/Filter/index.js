import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, showLoading } from "../../../redux/shop/shopActions";
import "./index.scss";

Filter.propTypes = {
	params: PropTypes.object,
	setParams: PropTypes.func,
};

function Filter({ params, setParams }) {
	const categories = useSelector((state) => state.shop.categories);
	const dispatch = useDispatch();

	const [priceRange, setPriceRange] = useState("");
	const [sort, setSort] = useState("");

	const onCategoryQueryChange = (e) => {
		setParams({ ...params, categoryId: e.target.value });
		dispatch(showLoading(true));
	};

	const onPriceQueryChange = (e) => {
		let value = e.target.value;
		setPriceRange(value);
		if (value === "") {
			setParams({ ...params, price_gte: "", price_lte: "" });
		} else {
			const result = value.split("-");
			setParams({ ...params, price_gte: result[0], price_lte: result[1] });
		}

		dispatch(showLoading(true));
	};

	const onBrandQueryChange = (e) => {
		setParams({ ...params, brands: e.target.value });
		dispatch(showLoading(true));
	};

	const onSortChange = (e) => {
		let value = e.target.value;
		setSort(value);
		if (value === "") {
			setParams({ ...params, _sort: "", _order: "" });
		} else {
			const result = value.split("-");
			setParams({ ...params, _sort: result[0], _order: result[1] });
		}
		dispatch(showLoading(true));
	};

	useEffect(() => {
		dispatch(setCategories());
	}, [dispatch]);
	return (
		<div className="product-filter grid wide">
			<select
				name="categories"
				value={params.categoryId}
				onChange={onCategoryQueryChange}
			>
				<option value="">Categories</option>
				{categories.map((item) => (
					<option value={item.id} key={item.id}>
						{item.name}
					</option>
				))}
			</select>
			<select name="price" value={priceRange} onChange={onPriceQueryChange}>
				<option value="">Price</option>
				<option value="0-100">$0 - $100</option>
				<option value="100-200">$100 - $200</option>
				<option value="200-300">$200 - $300</option>
				<option value="300-400">$300 - $400</option>
				<option value="400-500">$400 - $500</option>
			</select>
			<select name="brands" value={params.brands} onChange={onBrandQueryChange}>
				<option value="">Brands</option>
				<option value="adora">Adora</option>
				<option value="alias">Alias</option>
				<option value="roly">Roly</option>
				<option value="vans">Vans</option>
				<option value="kids-plaza">Kids Plaza</option>
				<option value="gucci">Gucci</option>
			</select>
			<select name="sort" value={sort} onChange={onSortChange}>
				<option value="">Sort by</option>
				<option value="name-asc">Name: A - Z</option>
				<option value="name-desc">Name: Z - A</option>
				<option value="price-asc">Price: Low to high</option>
				<option value="price-desc">Price: High to low</option>
			</select>
		</div>
	);
}

export default Filter;
