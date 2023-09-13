import { screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';

describe('Navigation component', () => {
	it('Navigation renders correctly in inner page and it should have a list', () => {
		renderWithProviders(
			<MemoryRouter initialEntries={['/inner']}>
				<Navigation />
			</MemoryRouter>
		);

		const list = screen.getByRole('list', {
			name: /navigation-list/,
		});

		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(7);
	});

	it('should contained the href to each section', async () => {
		renderWithProviders(
			<MemoryRouter initialEntries={['/inner']}>
				<Navigation />
			</MemoryRouter>
		);

		const aboutLink = screen.getByRole('link', { name: /About me/ });
		expect(aboutLink).toBeInTheDocument();
		expect(aboutLink).toHaveAttribute('href', '#about');

		const educatonLink = screen.getByRole('link', { name: /Education/ });
		expect(educatonLink).toBeInTheDocument();
		expect(educatonLink).toHaveAttribute('href', '#education');

		const experienceLink = screen.getByRole('link', { name: /Experience/ });
		expect(experienceLink).toBeInTheDocument();
		expect(experienceLink).toHaveAttribute('href', '#experience');

		const skillsLink = screen.getByRole('link', { name: /Skills/ });
		expect(skillsLink).toBeInTheDocument();
		expect(skillsLink).toHaveAttribute('href', '#skills');

		const portfolioLink = screen.getByRole('link', { name: /Portfolio/ });
		expect(portfolioLink).toBeInTheDocument();
		expect(portfolioLink).toHaveAttribute('href', '#portfolio');

		const contactsLink = screen.getByRole('link', { name: /Contacts/ });
		expect(contactsLink).toBeInTheDocument();
		expect(contactsLink).toHaveAttribute('href', '#contact');

		const feedbackLink = screen.getByRole('link', { name: /Feedbacks/ });
		expect(feedbackLink).toBeInTheDocument();
		expect(feedbackLink).toHaveAttribute('href', '#feedback');
	});
});
