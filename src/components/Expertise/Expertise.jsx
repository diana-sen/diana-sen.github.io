import React from 'react';
import Info from '../Info/Info';
import { EXPERIENCE_DATA } from '../../utils/constants';

const Expertise = ({ data }) => {
	return (
		<ul className='expertise-list'>
			{EXPERIENCE_DATA.map((item) => (
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

export default Expertise;
