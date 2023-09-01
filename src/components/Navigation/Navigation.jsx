import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faGraduationCap,
	faPen,
	faGem,
	faSuitcase,
	faLocationArrow,
	faComment,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
	const NAVIGATION_ITEMS = [
		{
			icon: faUser,
			ref: '#about',
			title: 'About me',
		},
		{
			icon: faGraduationCap,
			ref: '#education',
			title: 'Education',
		},
		{
			icon: faPen,
			ref: '#experience',
			title: 'Experience',
		},
		{
			icon: faGem,
			ref: '#skills',
			title: 'Skills',
		},
		{
			icon: faSuitcase,
			ref: '#portfolio',
			title: 'Portfolio',
		},
		{
			icon: faLocationArrow,
			ref: '#contact',
			title: 'Contacts',
		},
		{
			icon: faComment,
			ref: '#feedback',
			title: 'Feedbacks',
		},
	];

	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				{NAVIGATION_ITEMS.map((item) => (
					<li key={item.title} className='navigation-container'>
						<a className='navigation__link' href={item.ref}>
							<FontAwesomeIcon
								className='navigation__link-icon'
								icon={item.icon}
								title={item.title}
							/>
							<span className='navigation__link-title'>{item.title}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
