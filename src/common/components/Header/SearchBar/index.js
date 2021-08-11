import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import productsApi from "../../../../api/productsApi";
import Loading from "../../Loading";
import "./index.scss";
import ResultItem from "./ResultItem";

SearchBar.propTypes = {
	setSearchBar: PropTypes.func,
};

function SearchBar({ setSearchBar }) {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchNoResult, setSearchNoResult] = useState(false);

	const ref = useRef(null);

	const onInputChange = (e) => {
		let value = e.target.value;
		setSearchValue(value);
		setSearchNoResult(false);
		setSearchResult([]);
	};

	// Debounce function
	const useDebounce = (text, delay = 500) => {
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
	const debouncedSearchValue = useDebounce(searchValue);

	useEffect(() => {
		const fetchSearchResult = async () => {
			try {
				const response = await productsApi.searchByProductName(
					debouncedSearchValue
				);
				if (response.length === 0) {
					setSearchNoResult(true);
				}
				setLoading(false);
				setSearchResult(response);
			} catch (error) {
				console.log("Failed fetch search products");
			}
		};

		if (debouncedSearchValue) {
			setLoading(true);
			fetchSearchResult();
		}

		return () => {
			setSearchResult([]);
		};
	}, [debouncedSearchValue]);

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, []);

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
						{loading ? (
							<div className="search-form__loading col l-12 m-12 c-12">
								<Loading />
							</div>
						) : (
							showSearchResult(searchResult)
						)}
						{searchNoResult && (
							<div className="search-form__nors col l-12 m-12 c-12">
								0 Results For "{searchValue}"
							</div>
						)}
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
