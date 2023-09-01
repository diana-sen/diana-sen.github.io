import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ className, type, onClick, icon, text }) => {
	return (
		<button className={className} type={type} onClick={onClick}>
			<span>
				<FontAwesomeIcon icon={icon} />
			</span>
			{text}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.node,
	text: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
