import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand1 from "../../../assets/images/brand1.jpg";
import brand2 from "../../../assets/images/brand2.jpg";
import brand3 from "../../../assets/images/brand3.jpg";
import brand4 from "../../../assets/images/brand4.jpg";
import brand5 from "../../../assets/images/brand5.jpg";
import "./index.scss";

function AboutBrand() {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
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
		<div className="about-brand grid wide">
			<Slider {...settings} className="about-brand__slide">
				<img src={brand1} alt="brand1" />
				<img src={brand2} alt="brand2" />
				<img src={brand3} alt="brand3" />
				<img src={brand4} alt="brand4" />
				<img src={brand5} alt="brand5" />
			</Slider>
		</div>
	);
}

export default AboutBrand;
