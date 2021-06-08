import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ResultItem from "./ResultItem/ResultItem";
import "./SearchBar.scss";
import PropTypes from "prop-types";

SearchBar.propTypes = {
	setSearchBar: PropTypes.func,
};

function SearchBar({ setSearchBar }) {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const ref = useRef(null);

	const onInputChange = (e) => {
		let value = e.target.value;
		setSearchValue(value);
		setSearchResult([]);
	};

	// Debounce function
	const useDebounce = (text, delay) => {
		delay = delay || 500;
		const [debounced, setDebounced] = useState(text);

		useEffect(() => {
			const handler = setTimeout(() => {
				setDebounced(text);
			}, delay);

			return () => {
				clearTimeout(handler);
			};
		}, [text, delay]);

		return debounced;
	};
	const debouncedSearchValue = useDebounce(searchValue, 500);

	const fetchSearchResult = async () => {
		const response = await axios
			.get(
				`https://zonex-fake.herokuapp.com/api/products?name_like=${searchValue}`
			)
			.catch((err) => {
				console.log("Error", err);
			});

		setSearchResult(response.data);
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, []);

	useEffect(() => {
		if (debouncedSearchValue) {
			fetchSearchResult();
		}
		return () => {
			setSearchResult([]);
		};
	}, [debouncedSearchValue]); // eslint-disable-line react-hooks/exhaustive-deps

	const showSearchResult = (searchResult) => {
		let result = null;
		if (searchResult.length > 0) {
			result = searchResult.map((resultItem, index) => {
				return (
					<ResultItem
						key={resultItem.id}
						resultItem={resultItem}
						setSearchBar={setSearchBar}
					/>
				);
			});
		}
		if (searchValue.trim() === "") {
			result = undefined;
		}
		return result;
	};
	return (
		<div className="search ">
			<div className="search-form grid wide">
				<span className="search-form__title">What are you looking for?</span>
				<div className="search-form__field">
					<input
						type="text"
						placeholder="Search here..."
						value={searchValue}
						onChange={onInputChange}
						ref={ref}
					/>
					<i className="fas fa-search"></i>
					<div className="search-form__result row no-gutters">
						{showSearchResult(searchResult)}
					</div>
				</div>
				<div className="search-form__close" onClick={() => setSearchBar(false)}>
					<span>Close</span>
					<i className="fas fa-times"></i>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
