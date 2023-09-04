import React from 'react';
import { CONTACTS_DATA } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Address = () => {
	return (
		<address className='address'>
			<ul className='contact-list'>
				{CONTACTS_DATA.map((contact) => (
					<li key={contact.title} className='contact-container'>
						<FontAwesomeIcon className='contact-icon' icon={contact.icon} />

						<div className='contact-info'>
							<h4>
								{contact.content ? (
									contact.title
								) : (
									<a href={contact.href}>{contact.title}</a>
								)}
							</h4>
							<a href={contact.href}>{contact.content}</a>
						</div>
					</li>
				))}
			</ul>
		</address>
	);
};

export default Address;
