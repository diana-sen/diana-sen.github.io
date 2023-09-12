import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ className, type, onClick, icon, text }) => {
	return (
		<button className={className} type={type} onClick={onClick}>
			{icon && (
				<span>
					<FontAwesomeIcon icon={icon} title='icon' />
				</span>
			)}
			<span className='button-title'>{text}</span>
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.object,
	text: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
