import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

//test block
test('Button renders in home page without icon', () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<Button className='button' type='button' text='Know more'></Button>
		</MemoryRouter>
	);

	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent('Know more');
});

test('Button renders in inner page with icon', () => {
	render(
		<MemoryRouter initialEntries={['/inner']}>
			<Button
				className='button'
				type='button'
				text='Go back'
				icon={faChevronLeft}
			></Button>
		</MemoryRouter>
	);

	const button = screen.getByRole('button');
	const icon = screen.getByTitle('icon');
	expect(button).toBeInTheDocument();
	expect(icon).toBeInTheDocument();
});
