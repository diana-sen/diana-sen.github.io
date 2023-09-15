import React, { useEffect } from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkillsData } from '../../features/skills/skillsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faRotate } from '@fortawesome/free-solid-svg-icons';
import { toggleForm } from '../../features/skills/skillsSlice';

import SkillsForm from '../SkillsForm/SkillsForm';

const Skills = () => {
	const dispatch = useDispatch();
	const skillsData =
		useSelector((state) => state.SkillsReducer.skillsData) || [];
	const isLoading = useSelector((state) => state.SkillsReducer.isLoading);
	const hasError = useSelector((state) => state.SkillsReducer.hasError);

	const isSkillsFormOpen = useSelector(
		(state) => state.SkillsReducer.isFormOpen
	);

	useEffect(() => {
		dispatch(fetchSkillsData());
	}, [dispatch]);

	return (
		<div className='skills-container'>
			{!isLoading && !hasError && (
				<>
					<div className='skills-button-container'>
						<Button
							className={'button button-skills'}
							text='Open edit'
							type='button'
							icon={faPen}
							onClick={() => {
								dispatch(toggleForm());
							}}
						/>
					</div>
					{isSkillsFormOpen && <SkillsForm />}
					{skillsData && (
						<ul className='skills-container'>
							{skillsData.map((skill, index) => (
								<li
									key={`${skill.name}-${index}`}
									className='skill-bar'
									style={{ width: `${skill.range}%` }}
								>
									{skill.name}{' '}
								</li>
							))}
						</ul>
					)}
					<div className='skills-x-axis'>
						<div className='axis-lines'>
							<div className='axis-section' />
							<div className='axis-section' />
							<div className='axis-section' />
						</div>
						<div className='axis-legend'>
							<div className='axis-item axis-item-left'>Beginner</div>
							<div className='axis-item axis-item-center'>Proficient</div>
							<div className='axis-item axis-item-center'>Expert</div>
							<div className='axis-item axis-item-right'>Master</div>
						</div>
					</div>
				</>
			)}
			{isLoading && (
				<div className='skills-load'>
					<FontAwesomeIcon className='skills-load-icon' icon={faRotate} />
				</div>
			)}
			{hasError && (
				<div className='skills-error'>
					Something went wrong: please review your server connection!
				</div>
			)}
		</div>
	);
};

export default Skills;
