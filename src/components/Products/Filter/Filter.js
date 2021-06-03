import axios from "axios";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../redux/shop/shopActions";
import "./Filter.scss";

Filter.propTypes = {
	categoryQuery: PropTypes.string,
	setCategoryQuery: PropTypes.func,
	priceQuery: PropTypes.string,
	setPriceQuery: PropTypes.func,
	brandQuery: PropTypes.string,
	setBrandQuery: PropTypes.func,
	sort: PropTypes.string,
	setSort: PropTypes.func,
};

function Filter(props) {
	const {
		categoryQuery,
		setCategoryQuery,
		priceQuery,
		setPriceQuery,
		brandQuery,
		setBrandQuery,
		sort,
		setSort,
	} = props;

	const categories = useSelector((state) => state.shop.categories);
	const dispatch = useDispatch();

	const onCategoryQueryChange = (e) => {
		setCategoryQuery(e.target.value);
	};

	const onPriceQueryChange = (e) => {
		setPriceQuery(e.target.value);
	};

	const onBrandQueryChange = (e) => {
		setBrandQuery(e.target.value);
	};

	const onSortChange = (e) => {
		setSort(e.target.value);
	};

	const fetchCategories = async () => {
		const response = await axios
			.get(`https://zonex-fake.herokuapp.com/api/categories`)
			.catch((err) => {
				console.log("Error", err);
			});

		dispatch(setCategories(response.data));
	};

	useEffect(() => {
		fetchCategories();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<div className="product-filter grid wide">
			<select
				name="categories"
				value={categoryQuery}
				onChange={onCategoryQueryChange}
			>
				<option value="">Categories</option>
				{categories.map((item) => (
					<option value={`categories/${item.id}/`} key={item.id}>
						{item.name}
					</option>
				))}
			</select>
			<select name="price" value={priceQuery} onChange={onPriceQueryChange}>
				<option value="">Price</option>
				<option value="&price_gte=0&price_lte=100">$0 - $100</option>
				<option value="&price_gte=100&price_lte=200">$100 - $200</option>
				<option value="&price_gte=200&price_lte=300">$200 - $300</option>
				<option value="&price_gte=300&price_lte=400">$300 - $400</option>
				<option value="&price_gte=400&price_lte=500">$400 - $500</option>
			</select>
			<select name="brands" value={brandQuery} onChange={onBrandQueryChange}>
				<option value="">Brands</option>
				<option value="&brands=adora">Adora</option>
				<option value="&brands=alias">Alias</option>
				<option value="&brands=roly">Roly</option>
				<option value="&brands=vans">Vans</option>
				<option value="&brands=kids-plaza">Kids Plaza</option>
				<option value="&brands=gucci">Gucci</option>
			</select>
			<select name="sort" value={sort} onChange={onSortChange}>
				<option value="">Sort by</option>
				<option value="&_sort=name">Name: A - Z</option>
				<option value="&_sort=name&_order=desc">Name: Z - A</option>
				<option value="&_sort=price">Price: Low to high</option>
				<option value="&_sort=price&_order=desc">Price: High to low</option>
			</select>
		</div>
	);
}

export default Filter;
