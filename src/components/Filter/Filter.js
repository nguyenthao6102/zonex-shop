import React from "react";
import "./Filter.scss";

function Filter() {
	return (
		<div className="product-filter grid wide">
			<select name="categories" defaultValue="categories">
				<option value="categories">Categories</option>
				<option value="jacket">Jacket</option>
				<option value="clothes">Clothes</option>
				<option value="shoes">Shoes</option>
			</select>
			<select name="price" defaultValue="price">
				<option value="price">Price</option>
				<option value="100-200">$100 - $200</option>
				<option value="200-300">$200 - $300</option>
				<option value="300-400">$300 - $400</option>
			</select>
			<select name="brand" defaultValue="brand">
				<option value="brand">Brand</option>
				<option value="gucci">Gucci</option>
				<option value="vans">Vans</option>
				<option value="polo">Polo</option>
			</select>
			<select name="sort" defaultValue="sortby">
				<option value="sortby">sort by</option>
				<option value="a-z">Name a-z</option>
				<option value="z-a">Name z-a</option>
				<option value="low-to-high">Price: low to high</option>
				<option value="high-to-low">Price: high to low</option>
			</select>
		</div>
	);
}

export default Filter;
