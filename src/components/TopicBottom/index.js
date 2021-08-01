import React from "react";
import "./index.scss";
import topic4 from "../../assets/images/topic-4.jpg";
import topic5 from "../../assets/images/topic-5.jpg";

function TopicBottom() {
	return (
		<div className="topic-bottom">
			<div className="topic-bottom-item">
				<img className="topic-bottom-item__img" src={topic4} alt="topic4" />
				<div className="topic-bottom-item__content">
					<h2>Men’s Sportswear</h2>
					<span>Read more</span>
				</div>
			</div>
			<div className="topic-bottom-item">
				<img className="topic-bottom-item__img" src={topic5} alt="topic5" />
				<div className="topic-bottom-item__content">
					<h2>Find your fit</h2>
					<span>Read more</span>
				</div>
			</div>
		</div>
	);
}

export default TopicBottom;
