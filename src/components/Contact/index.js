import React from "react";
import mailIcon from "../../assets/images/mail-icon.png";
import mapIcon from "../../assets/images/map-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import "./index.scss";

function Contact() {
	return (
		<div className="contact grid wide">
			<div className="row">
				<div className="contact-head col l-o-3 l-6 m-12 c-12">
					<span className="contact-head__title">OUT CONTACTS</span>
					<h2 className="contact-head__slogan">We’re Here to Help You</h2>
					<p className="contact-head__sub">
						Got a project in mind? We’d love to hear about it. Take five minutes
						to fill out our project form so that we can get to know you and
						understand your project.
					</p>
				</div>
			</div>

			<div className="contact-information row">
				<div className="contact-information__group col l-4 m-12 c-12">
					<img src={mapIcon} alt="map icon" />
					<span>VISIT US DAILY:</span>
					<p>27 Division, New York, 10002</p>
				</div>
				<div className="contact-information__group col l-4 m-12 c-12">
					<img src={phoneIcon} alt="phone icon" />
					<span>PHONE US 24/7:</span>
					<p>+8 (123) 456 789</p>
				</div>
				<div className="contact-information__group col l-4 m-12 c-12">
					<img src={mailIcon} alt="mail icon" />
					<span>MAIL US 24/7:</span>
					<p>support@zonex.com</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
