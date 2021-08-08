import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import servicesIcon1 from "../../../assets/images/ic-1.png";
import servicesIcon2 from "../../../assets/images/ic-2.png";
import servicesIcon3 from "../../../assets/images/ic-3.png";
import "./index.scss";

function AboutServices() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 739,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="about-services grid wide">
			<h6 className="services-title">Featured Services</h6>
			<Slider {...settings} className="services-content">
				<div className="services-content__group col">
					<img src={servicesIcon1} alt="services icon 1" />

					<h4>We pride ourselves on innovative.</h4>

					<p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts. Separated they
						live.
					</p>

					<button>LEARN MORE</button>
				</div>

				<div className="services-content__group col">
					<img src={servicesIcon2} alt="services icon 2" />

					<h4>We won many awards.</h4>

					<p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts. Separated they
						live.
					</p>

					<button>LEARN MORE</button>
				</div>

				<div className="services-content__group col">
					<img src={servicesIcon3} alt="services icon 3" />

					<h4>We are a team of genius people.</h4>

					<p>
						Far far away, behind the word mountains, far from the countries
						Vokalia and Consonantia, there live the blind texts. Separated they
						live.
					</p>

					<button>LEARN MORE</button>
				</div>
			</Slider>
		</div>
	);
}

export default AboutServices;
