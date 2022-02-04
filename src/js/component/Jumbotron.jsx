import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<>
			<div className="jumbotron border border-light m-5 py-5 bg-light rounded-3">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">{props.description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonUrl}
					role="button">
					{props.buttonLabel}
				</a>
			</div>
		</>
	);
};

Jumbotron.propTypes = {
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

export default Jumbotron;
