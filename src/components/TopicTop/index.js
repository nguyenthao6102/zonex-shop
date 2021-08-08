import React from "react";
import topic1 from "../../assets/images/topic-1.png";
import topic2 from "../../assets/images/topic-2.png";
import topic3 from "../../assets/images/topic-3.png";
import "./index.scss";

function TopicTop() {
	return (
		<div className="topic-top grid">
			<div className="row">
				<div className="topic-top__item col l-4 m-4 c-12">
					<div className="topic-top__wrap">
						<img className="topic-top__img" src={topic1} alt="topic1" />
						<div className="topic-top__content">
							<h3 className="topic-top__name">Women's Mid-Season</h3>
							<span className="topic-top__btn">Shop Now</span>
						</div>
					</div>
				</div>

				<div className="topic-top__item col l-4 m-4 c-12">
					<div className="topic-top__wrap">
						<img className="topic-top__img" src={topic2} alt="topic2" />
						<div className="topic-top__content">
							<h3 className="topic-top__name">Summer Romance</h3>
							<span className="topic-top__btn">Shop Now</span>
						</div>
					</div>
				</div>

				<div className="topic-top__item col l-4 m-4 c-12">
					<div className="topic-top__wrap">
						<img className="topic-top__img" src={topic3} alt="topic3" />
						<div className="topic-top__content">
							<h3 className="topic-top__name">20% Off Accessories</h3>
							<span className="topic-top__btn">Shop Now</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopicTop;
