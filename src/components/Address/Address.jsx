import React from 'react';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Address = (props) => {
	const CONTACTS_DATA = [
		{
			icon: faPhone,
			title: '+522751109',
			href: 'tel:+522751109',
		},
		{
			icon: faEnvelope,
			title: 'diana.sensalinas@gmail.com',
			href: 'mailto:diana.sensalinas@gmail.com',
		},
		{
			title: 'LinkedIn',
			icon: faLinkedin,
			content: 'Diana Sen',
			href: 'https://www.linkedin.com/in/dianasen/',
		},
		{
			title: 'GitHub',
			icon: faGithub,
			content: 'diana-sen',
			href: 'https://github.com/diana-sen',
		},
	];
	return (
		<address className='address'>
			<ul className='contact-list'>
				{CONTACTS_DATA.map((contact) => (
					<li key={contact.title} className='contact-container'>
						<FontAwesomeIcon className='contact-icon' icon={contact.icon} />

						<div className='contact-info'>
							<h4>{contact.title}</h4>
							<a href={contact.href}>{contact.content}</a>
						</div>
					</li>
				))}
			</ul>
		</address>
	);
};

export default Address;
