import React from 'react';
import Button from '../../components/Button/Button';
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/images/diana_portfolio.jpg';

const Home = () => {
	const navigate = useNavigate();

	return (
		<main className='app-home'>
			<PhotoBox
				name='Diana Sen'
				title='Programmer. Creative. Innovator'
				description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
				avatar={avatar}
			/>
			<Button
				className={'button'}
				text={'Know more'}
				onClick={() => navigate('/inner')}
			/>
		</main>
	);
};

export default Home;
