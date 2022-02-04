import React from "react";
import PropTypes from "prop-types";
import image1 from "../../img/rigo-baby.jpg";

const Card = (props) => {
	return (
		<>
			<div className="card">
				<img src={image1} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href={props.buttonURL} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</>
	);
};

Card.PropTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

export default Card;
