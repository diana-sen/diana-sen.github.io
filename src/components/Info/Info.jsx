import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ text, children }) => {
	return (
		<div className='info'>
			{children}
			<p>{text}</p>
		</div>
	);
};

Info.propTypes = {
	text: PropTypes.string,
	children: PropTypes.node,
};

export default Info;
