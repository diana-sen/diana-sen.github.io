import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ text, children }) => {
	return (
		<div className='info'>
			{children}
			<p className='info-details'>{text}</p>
		</div>
	);
};

Info.propTypes = {
	text: PropTypes.string,
	children: PropTypes.node,
};

export default Info;
