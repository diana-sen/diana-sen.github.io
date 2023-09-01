import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ title, content }) => {
	return (
		<article className='box-title'>
			<h2>{title}</h2>
			<div className='box-content'>{content}</div>
		</article>
	);
};

Box.propTypes = {
	title: PropTypes.string,
	content: PropTypes.node,
};

export default Box;
