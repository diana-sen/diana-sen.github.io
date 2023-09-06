import React, { useEffect } from 'react';
import Info from '../Info/Info';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEducationData } from '../../features/education/educationSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const TimeLine = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.getEducationReducer.educationData);
	const isLoading = useSelector((state) => state.getEducationReducer.isLoading);
	const hasError = useSelector((state) => state.getEducationReducer.hasError);

	useEffect(() => {
		dispatch(fetchEducationData());
	}, [dispatch]);

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
	}
	if (isLoading) {
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
