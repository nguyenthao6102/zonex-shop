import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

ResultItem.propTypes = {
	resultItem: PropTypes.object,
	setSearchBar: PropTypes.func,
};

function ResultItem({ resultItem, setSearchBar }) {
	const onResultItemClick = () => {
		setSearchBar(false);
	};
	return (
		<div className="col l-2 m-3 c-6">
			<div className="result-item">
				<div className="result-item__img">
					<Link
						to={`/products/${resultItem.id}`}
						style={{ backgroundImage: `url(${resultItem.image})` }}
						onClick={onResultItemClick}
					></Link>
				</div>

				<div className="result-item__content">
					<Link to={`/products/${resultItem.id}`} onClick={onResultItemClick}>
						{resultItem.name}
					</Link>
					<div className="result-item-price">
						<span className="result-item-price__current">
							${resultItem.price}
						</span>
						{resultItem.oldPrice && (
							<span className="result-item-price__old">
								${resultItem.oldPrice}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResultItem;
