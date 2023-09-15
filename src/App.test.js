import { render, screen } from '@testing-library/react';
import App from './App';
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
