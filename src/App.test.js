import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from './store/store';
import App from './App';
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import userEvent from '@testing-library/user-event';
import React from 'react';

test('renders Home component', () => {
	render(<App />);

	const figurecaption = screen.getByText(/Diana Sen/);
	const h2tag = screen.getByText(
		/Front-End Developer and Biomedical Engineer/i
	);
	const button = screen.getByRole('button');

	expect(figurecaption).toBeInTheDocument();
	expect(h2tag).toBeInTheDocument();
	expect(button).toBeInTheDocument();
});
