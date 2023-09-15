import { screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Expertise from './Expertise';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import { EXPERIENCE_DATA } from '../../utils/constants';

describe('Feedback component', () => {
	beforeEach(() => {
		renderWithProviders(
			<MemoryRouter initialEntries={['/inner']}>
				<Expertise data={EXPERIENCE_DATA} />
			</MemoryRouter>
		);
	});

	it('renders a list of feedback in inner page', () => {
		const list = screen.getByRole('list', {
			name: /expertise-list/,
		});

		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(EXPERIENCE_DATA.length);
	});
});
