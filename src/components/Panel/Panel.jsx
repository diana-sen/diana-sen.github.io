import React from 'react';

import PhotoBox from '../PhotoBox/PhotoBox';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import avatar from '../../assets/images/diana_portfolio.jpg';

const Panel = ({ isVisible }) => {
	const navigate = useNavigate();
	return (
		<>
			<div className={`panel ${isVisible ? 'visible' : 'hidden'}`}>
				<PhotoBox name='Diana Sen' avatar={avatar} />
				<Navigation />
				<Button
					className={'button'}
					text={'Go back'}
					icon={faChevronLeft}
					onClick={() => navigate('/')}
				/>
			</div>
		</>
	);
};

//Panel.propTypes = {}

export default Panel;
