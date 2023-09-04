import React from 'react';
import PropTypes from 'prop-types';

const PortfolioInfo = ({ title, text, url }) => {
	return (
		<div className='portfolio-info-overlay'>
			<h2>{title}</h2>
			<p>{text}</p>
			<a href={url}>View Source</a>
		</div>
	);
};

PortfolioInfo.propTypes = {
	text: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
};

export default PortfolioInfo;
