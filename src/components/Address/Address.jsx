import React from 'react';
import { CONTACTS_DATA } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Address = () => {
	return (
		<address className='address'>
			<ul className='contact-list' aria-label='contacts-list'>
				{CONTACTS_DATA.map((contact) => (
					<li key={contact.title} className='contact-container'>
						<FontAwesomeIcon className='contact-icon' icon={contact.icon} />

						<div className='contact-info'>
							{contact.content ? (
								<>
									<h4>{contact.title}</h4>
									<a href={contact.href}>{contact.content}</a>
								</>
							) : (
								<a className='contact-one-link' href={contact.href}>
									{contact.title}
								</a>
							)}
						</div>
					</li>
				))}
			</ul>
		</address>
	);
};

export default Address;
