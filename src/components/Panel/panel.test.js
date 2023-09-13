import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Panel from './Panel';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedNavigate,
}));

describe('Panel component', () => {
	beforeEach(() => {
		if (
			expect.getState().currentTestName !==
			'should have the class hidden for panel'
		)
			renderWithProviders(
				<MemoryRouter initialEntries={['/inner']}>
					<Panel isVisible={true} />
				</MemoryRouter>
			);
	});

	it('Panel renders correctly in inner page', () => {
		const navigation = screen.getByRole('navigation');
		const button = screen.getByRole('button', { name: /Go back/ });
		expect(navigation).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	it('should have an image with a figure caption', () => {
		const imageProfile = screen.getByRole('img', { name: /Diana Sen/i });
		const figurecaption = screen.getByText(/Diana Sen/);
		expect(imageProfile).toHaveAttribute('src', 'diana_portfolio.jpg');
		expect(imageProfile).toHaveAttribute('alt', 'Diana Sen');
		expect(figurecaption).toBeInTheDocument();
	});

	it('should navigate to / after clicking the Go back button', async () => {
		const button = screen.getByRole('button');
		userEvent.click(button);
		await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith('/'));
	});

	it('should have the class hidden for panel', () => {
		const { container } = renderWithProviders(
			<MemoryRouter initialEntries={['/inner']}>
				<Panel isVisible={false} />
			</MemoryRouter>
		);

		expect(container.firstChild).toHaveClass('panel hidden');
	});
});
