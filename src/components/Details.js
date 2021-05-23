import React from "react";
import "./Details.css";

function Details({ icon, detail, shortDesc }) {
	return (
		<div className="car__details-wrapper">
			<div className="car__details-top">
				<span className="car__detail-icon">{icon}</span>
				<h3>{detail}</h3>
			</div>
			<div className="car__details-bottom">
				<p> {shortDesc} </p>
			</div>
		</div>
	);
}

export default Details;
