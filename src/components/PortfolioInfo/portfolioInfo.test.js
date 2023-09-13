import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import PortfolioInfo from './PortfolioInfo';

const PORTFOLIO_INFO_TEST = {
	className: 'ui',
	title: 'Project 1',
	description:
		'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	projectUrl: 'https://github.com/diana-sen/diana-sen.github.io',
};

describe('Portfolio info component', () => {
	renderWithProviders(
		<MemoryRouter initialEntries={['/inner']}>
			<PortfolioInfo
				title={PORTFOLIO_INFO_TEST.title}
				text={PORTFOLIO_INFO_TEST.description}
				url={PORTFOLIO_INFO_TEST.projectUrl}
			/>
		</MemoryRouter>
	);

	it('renders portfolio component with a heading, a paragraph and a link', () => {
		expect(
			screen.getByRole('heading', { level: 2, name: PORTFOLIO_INFO_TEST.title })
		).toBeInTheDocument();
		expect(
			screen.getByText(PORTFOLIO_INFO_TEST.description)
		).toBeInTheDocument();

		expect(
			screen.getByRole('link', { name: /View Source/ })
		).toBeInTheDocument();

		const infoLink = screen.getByRole('link', { name: /View Source/ });
		expect(infoLink).toBeInTheDocument();
		expect(infoLink).toHaveAttribute('href', PORTFOLIO_INFO_TEST.projectUrl);
	});
});
