import { screen, within } from '@testing-library/react';
import TimeLine from './TimeLine';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import server from '../../services/server';

describe('Timeline component', () => {
	let serverTest;
	beforeAll(() => {
		serverTest = server();
	});

	afterAll(() => serverTest.shutdown());
	beforeEach(() => {
		renderWithProviders(<TimeLine />);
	});

	it('renders a list of education data in inner page', async () => {
		const list = await screen.findByRole(
			'list',
			{
				name: /timeline-list/,
			},
			{ timeout: 5000 }
		);
		console.log(list);
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(4);
	});
});
