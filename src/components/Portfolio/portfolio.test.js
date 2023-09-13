import { screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Portfolio from './Portfolio';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';

describe('Feedback component', () => {
	beforeEach(() => {
		renderWithProviders(
			<MemoryRouter initialEntries={['/inner']}>
				<Portfolio />
			</MemoryRouter>
		);
	});

	it('renders a list of feedback in inner page', () => {
		const list = screen.getByRole('list', {
			name: /categories-list/,
		});

		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(3);
	});
});
