import React from "react";
import "./Filter.scss";

function Filter(props) {
	const { categories, setCategories, sort, setSort } = props;
	return (
		<div className="product-filter grid wide">
			<input type="text" name="search" />
			<select
				name="categories"
				value={categories}
				onChange={(e) => {
					setCategories(e.target.value);
				}}
			>
				<option value="">Categories</option>
				<option value="&categories=jacket">Jacket</option>
				<option value="&categories=clothes">Clothes</option>
				<option value="&categories=shoes">Shoes</option>
				<option value="&categories=kids">Kids</option>
			</select>

			<select
				name="categories"
				value={sort}
				onChange={(e) => {
					setSort(e.target.value);
				}}
			>
				<option value="">Sort by</option>
				<option value="&sortBy=name">Name: A - Z</option>
				<option value="&sortBy=name&order=desc">Name: Z - A</option>
				<option value="&sortBy=price">Price: Low to high</option>
				<option value="&sortBy=price&order=desc">Price: High to low</option>
			</select>
		</div>
	);
}

export default Filter;
