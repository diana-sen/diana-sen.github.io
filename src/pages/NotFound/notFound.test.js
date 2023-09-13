import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component', () => {
	beforeEach(() => {
		renderWithProviders(
			<MemoryRouter initialEntries={['/not-found']}>
				<NotFound />
			</MemoryRouter>
		);
	});

	it('renders with valid not-found url', () => {
		expect(
			screen.getByRole('heading', { level: 2, name: 'Page Not Found' })
		).toBeInTheDocument();
		expect(
			screen.getByText(
				/Looks like you've followed a broken link or entered a URL that doesn't exist on this site/i
			)
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: '← Back to site' })
		).toBeInTheDocument();
	});

	it('After clicking the link, the page is redirected to home url', async () => {
		userEvent.click(screen.getByText(/← Back to site/i));
		await waitFor(() => expect(window.location.pathname).toMatch('/'));
	});
});
