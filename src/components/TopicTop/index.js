import React from "react";
import topic1 from "../../assets/images/topic-1.png";
import topic2 from "../../assets/images/topic-2.png";
import topic3 from "../../assets/images/topic-3.png";
import "./index.scss";

function TopicTop() {
	const topics = [
		{ name: "Women's Mid-Season", url: topic1 },
		{ name: "Summer Romance", url: topic2 },
		{ name: "20% Off Accessories", url: topic3 },
	];

	const showTopic = () => {
		let result = null;
		result = topics.map((topic, index) => {
			return (
				<div className="topic-top__item col l-4 m-4 c-12" key={index}>
					<div className="topic-top__wrap">
						<img className="topic-top__img" src={topic.url} alt={topic.url} />
						<div className="topic-top__content">
							<h3 className="topic-top__name">{topic.name}</h3>
							<span className="topic-top__btn">Shop Now</span>
						</div>
					</div>
				</div>
			);
		});
		return result;
	};

	return (
		<div className="topic-top grid">
			<div className="row">{showTopic()}</div>
		</div>
	);
}

export default TopicTop;
