import React from 'react';
import PropTypes from 'prop-types';
import Info from '../Info/Info';

const Expertise = ({ data }) => {
	return (
		<ul className='expertise-list' aria-label='expertise-list'>
			{data.map((item) => (
				<li className='expertise-container' key={item.info.job}>
					<div className='expertise-list-date'>
						<h3>{item.info.company}</h3>
						<span className='date'>{item.date}</span>
					</div>
					<div className='expertise-list-info'>
						<Info text={item.info.description}>
							<h3>{item.info.job}</h3>
						</Info>
					</div>
				</li>
			))}
		</ul>
	);
};

Expertise.propTypes = {
	data: PropTypes.array,
};

export default Expertise;
