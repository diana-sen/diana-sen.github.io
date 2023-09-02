import Isotope from 'isotope-layout';

import PortfolioInfo from './PortfolioInfo';
import { useEffect, useRef, useState } from 'react';

import { PORTFOLIO_DATA } from '../../utils/constants';

export default function Portfolio() {
	const CATEGORIES_DATA = [
		{ selector: '*', label: 'All' },
		{ selector: '.ui', label: 'UI' },
		{ selector: '.code', label: 'Code' },
	];

	const isotope = useRef(null);
	const [selectedFilter, setSelectedFilter] = useState('*');

	useEffect(() => {
		isotope.current = new Isotope('.project-container', {
			itemSelector: '.filter-item',
			layoutMode: 'fitRows',
		});

		return () => {
			isotope.current?.destroy();
		};
	}, []);

	const handleFilter = (filterSelector) => {
		setSelectedFilter(filterSelector);
		isotope.current.arrange({ filter: filterSelector });
	};

	return (
		<div className='portfolio'>
			<ul className='portfolio-tabs'>
				{CATEGORIES_DATA.map((filter) => (
					<li
						key={filter.label}
						onClick={() => handleFilter(filter.selector)}
						className={filter.selector === selectedFilter ? 'selected' : ''}
					>
						{filter.label}
					</li>
				))}
			</ul>

			<div className='project-container'>
				{PORTFOLIO_DATA.map((project) => (
					<div
						key={project.title}
						className={`filter-item ${project.className}`}
					>
						<img src={project.image} alt='Avatar' className='portfolio-image' />
						<PortfolioInfo
							title={project.title}
							text={project.description}
							url={project.url}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
