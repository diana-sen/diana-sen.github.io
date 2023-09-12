import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import userEvent from '@testing-library/user-event';
import React from 'react';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedNavigate,
}));

describe('Home component', () => {
	it('renders Home component', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Home />
			</MemoryRouter>
		);

		const figurecaption = screen.getByText(/Diana Sen/);
		const h2tag = screen.getByText(
			/Front-End Developer and Biomedical Engineer/i
		);
		const button = screen.getByRole('button');

		expect(figurecaption).toBeInTheDocument();
		expect(h2tag).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	it('should have an image', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Home />
			</MemoryRouter>
		);
		const imageProfile = screen.getByRole('img');
		expect(imageProfile).toHaveAttribute('src', 'diana_portfolio.jpg');
		expect(imageProfile).toHaveAttribute('alt', 'Diana Sen');
	});

	it('should navigate to /inner after clicking the button', async () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<Home />
			</MemoryRouter>
		);
		const button = screen.getByRole('button');
		userEvent.click(button);
		await waitFor(() => expect(mockedNavigate).toHaveBeenCalledWith('/inner'));
	});
});
