import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, icon, text }) => {
	return (
		<button className='button' type={type} onClick={onClick}>
			<span>{icon}</span>
			{text}
		</button>
	);
};

Button.propTypes = {
	icon: PropTypes.node, //??
	text: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
