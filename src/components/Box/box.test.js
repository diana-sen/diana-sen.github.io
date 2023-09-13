import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import { ABOUT_DATA } from '../../utils/constants';
import Box from './Box';

describe('Box component', () => {
	renderWithProviders(
		<MemoryRouter initialEntries={['/inner']}>
			<Box
				title={ABOUT_DATA.title}
				content={ABOUT_DATA.content}
				reference={'about'}
			></Box>
		</MemoryRouter>
	);

	it('renders box component with a heading and a text content', () => {
		expect(
			screen.getByRole('heading', { level: 2, name: ABOUT_DATA.title })
		).toBeInTheDocument();
		expect(screen.getByText(ABOUT_DATA.content)).toBeInTheDocument();
	});
});
