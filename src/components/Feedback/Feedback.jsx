import React from 'react';
import PropTypes from 'prop-types';
import Info from '../Info/Info';
import { getHostName } from '../../utils/helpers';

const Feedback = ({ data }) => {
	return (
		<div className='feedback'>
			<ul className='feedback-list'>
				{data.map((item, index) => (
					<li
						className='feedback-item-container'
						key={`${index}-${item.reporter.name}`}
					>
						<Info text={item.feedback}></Info>
						<div className='feedback-reporter-info'>
							<img
								className='reporter-image'
								src={item.reporter.photoUrl}
								alt={item.reporter.name}
							></img>
							<span className='reporter-name'>{`${item.reporter.name},`}</span>
							<a className='reporter-site' href={item.reporter.citeUrl}>
								{getHostName(item.reporter.citeUrl)}
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

Feedback.propTypes = {
	data: PropTypes.array,
};

export default Feedback;
