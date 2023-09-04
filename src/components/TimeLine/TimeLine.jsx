import React from 'react';
import Info from '../Info/Info';

const TimeLine = ({ data }) => {
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
};

export default TimeLine;
