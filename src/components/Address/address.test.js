import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Address from './Address';
import { CONTACTS_DATA } from '../../utils/constants';

describe('Address component in inner page', () => {
	it('should render a list of 4 contacts', () => {
		render(
			<MemoryRouter initialEntries={['/inner']}>
				<Address />
			</MemoryRouter>
		);

		const list = screen.getByRole('list', {
			name: /contacts-list/,
		});

		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(4);
	});

	it('should contained two headings and four links', () => {
		render(
			<MemoryRouter initialEntries={['/inner']}>
				<Address />
			</MemoryRouter>
		);

		expect(
			screen.getByRole('heading', {
				level: 4,
				name: 'LinkedIn',
			})
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', {
				level: 4,
				name: 'GitHub',
			})
		).toBeInTheDocument();

		expect(screen.getByRole('link', { name: '+522751109' })).toHaveAttribute(
			'href',
			'tel:+522751109'
		);

		expect(
			screen.getByRole('link', { name: 'diana.sensalinas@gmail.com' })
		).toHaveAttribute('href', 'mailto:diana.sensalinas@gmail.com');

		expect(screen.getByRole('link', { name: 'Diana Sen' })).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/dianasen/'
		);

		expect(screen.getByRole('link', { name: 'diana-sen' })).toHaveAttribute(
			'href',
			'https://github.com/diana-sen'
		);
	});
});
