import React, { useEffect, useState } from 'react';
import Panel from '../../components/Panel/Panel';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import Expertise from '../../components/Expertise/Expertise';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import Address from '../../components/Address/Address';
import TimeLine from '../../components/TimeLine/TimeLine';
import {
	ABOUT_DATA,
	EXPERIENCE_DATA,
	FEEDBACK_DATA,
	//TIMELINE_DATA,
} from '../../utils/constants';
import Portfolio from '../../components/Portfolio/Portfolio';
import Feedback from '../../components/Feedback/Feedback';
const Inner = () => {
	const [panelVisible, setPanelVisible] = useState(true);
	const [educationData, setEducationData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	const togglePanel = () => {
		setPanelVisible(!panelVisible);
	};

	const fetchEducationData = () => {
		setIsLoading(true);
		fetch('/api/educations')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setIsLoading(false);
				setEducationData(data);
			})
			.catch((e) => {
				console.log(e);
				setIsLoading(false);
				setHasError(true);
			});
	};

	useEffect(() => {
		fetchEducationData();
		console.log(educationData);
	}, []);

	return (
		<main>
			<div className='row'>
				<div className='column1'>
					<Panel isVisible={panelVisible} />
				</div>
				<div className={`column2 ${panelVisible ? 'visible' : 'hidden'}`}>
					<Button
						className='button'
						onClick={togglePanel}
						icon={faBars}
					></Button>
				</div>
				<div className={`column3 ${panelVisible ? 'visible' : 'hidden'}`}>
					<Box
						title={ABOUT_DATA.title}
						content={ABOUT_DATA.content}
						reference={'about'}
					></Box>
					<Box
						title={'Education'}
						content={
							<TimeLine
								data={educationData}
								isLoading={isLoading}
								hasError={hasError}
							/>
						}
						reference={'education'}
					></Box>
					<Box
						title={'Experience'}
						content={<Expertise data={EXPERIENCE_DATA} />}
						reference={'experience'}
					></Box>
					<Box
						title={'Portfolio'}
						content={<Portfolio />}
						reference={'portfolio'}
					></Box>
					<Box
						title={'Contact'}
						content={<Address />}
						reference={'contact'}
					></Box>
					<Box
						title={'Feedbacks'}
						content={<Feedback data={FEEDBACK_DATA} />}
						reference={'feedback'}
					></Box>
				</div>
			</div>
		</main>
	);
};

export default Inner;
