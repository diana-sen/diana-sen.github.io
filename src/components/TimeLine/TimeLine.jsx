import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import Info from '../Info/Info';

const TimeLine = ({ data, isLoading, hasError }) => {
	if (!isLoading && !hasError) {
		return (
			<div className='timeline'>
				<ul className='timeline-list'>
					{data.map((item) => (
						<li className='timeline-item-container' key={item.title}>
							<div className='timeline-date'>{item.date}</div>
							<Info text={item.text}>
								<h3>{item.title}</h3>
							</Info>
						</li>
					))}
				</ul>
			</div>
		);
	} else if (isLoading) {
		return (
			<div className='timeline-load'>
				<FontAwesomeIcon className='timeline-icon' icon={faRotate} />
			</div>
		);
	} else {
		return (
			<div className='timeline-error'>
				Something went wrong: please review your server connection!
			</div>
		);
	}
};

export default TimeLine;
