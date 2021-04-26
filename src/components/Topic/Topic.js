import "./Topic.scss";
import React from "react";
import PropTypes from "prop-types";
import topic1 from "../../assets/images/topic-1.png";
import topic2 from "../../assets/images/topic-2.png";
import topic3 from "../../assets/images/topic-3.png";

Topic.propTypes = {};

function Topic(props) {
	return (
		<div className="topic grid">
			<div className="row">
				<div className="topic__item col l-4 m-4 c-12">
					<img className="topic__img" src={topic1} alt="topic1" />
					<div className="topic__content">
						<h3 className="topic__name">Women's Mid-Season</h3>
						<span className="topic__btn">Shop Now</span>
					</div>
				</div>
				<div className="topic__item col l-4 m-4 c-12">
					<img className="topic__img" src={topic2} alt="topic2" />
					<div className="topic__content">
						<h3 className="topic__name">Summer Romance</h3>
						<span className="topic__btn">Shop Now</span>
					</div>
				</div>
				<div className="topic__item col l-4 m-4 c-12">
					<img className="topic__img" src={topic3} alt="topic3" />
					<div className="topic__content">
						<h3 className="topic__name">20% Off Accessories</h3>
						<span className="topic__btn">Shop Now</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topic;
