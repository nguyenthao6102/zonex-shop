import React from "react";
import PropTypes from "prop-types";
import "./Slider.scss";

Slider.propTypes = {};

function Slider(props) {
	return (
		<div className="slider">
			<div className="slider__caption">
				<h1 className="slider__caption1">New In Spring Wear</h1>
				<h5 className="slider__caption2">
					Discover new ways to dress this spring with a selection of the best
					designer jacket
				</h5>
			</div>
		</div>
	);
}

export default Slider;
