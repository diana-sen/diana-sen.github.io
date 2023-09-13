import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NAVIGATION_DATA } from '../../utils/constants';

const Navigation = () => {
	return (
		<nav className='navigation' aria-label='navigation'>
			<ul className='navigation-list' aria-label='navigation-list'>
				{NAVIGATION_DATA.map((item) => (
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
