import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ title, content, reference }) => {
	return (
		<article className='box-title'>
			<h2 id={reference}>{title}</h2>
			<div className='box-content'>{content}</div>
		</article>
	);
};

Box.propTypes = {
	title: PropTypes.string,
	content: PropTypes.node,
};

export default Box;
