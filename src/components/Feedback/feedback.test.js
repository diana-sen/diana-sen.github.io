import { screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Feedback from './Feedback';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import { FEEDBACK_DATA } from '../../utils/constants';

describe('Feedback component', () => {
	beforeEach(() => {
		renderWithProviders(
			<MemoryRouter initialEntries={['/inner']}>
				<Feedback data={FEEDBACK_DATA} />
			</MemoryRouter>
		);
	});

	it('renders a list of feedback in inner page', () => {
		const list = screen.getByRole('list', {
			name: /feedback-list/,
		});

		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(FEEDBACK_DATA.length);
	});
});
