import Isotope from 'isotope-layout';

import PortfolioInfo from './PortfolioInfo';
import { useEffect, useRef } from 'react';

import { PORTFOLIO_DATA } from '../../utils/constants';

export default function Portfolio() {
	const CATEGORIES_DATA = [
		{ selector: '*', label: 'All' },
		{ selector: 'ui', label: 'UI' },
		{ selector: 'code', label: 'Code' },
	];
	//store the isotope object and filter keyword
	//const containerRef = useRef(null);

	const isotope = useRef(null);

	useEffect(() => {
		//if ("containerRef.current") {
		isotope.current = new Isotope('.project-container', {
			itemSelector: '.filter-item',
			layoutMode: 'fitRows',
		});
		//}
		return () => {
			isotope.current?.destroy();
		};
	}, []);

	const handleFilter = (filterKey) => {
		filterKey === '*'
			? isotope.current.arrange({ filter: `*` })
			: isotope.current.arrange({ filter: `.${filterKey}` });
	};

	return (
		<div className='portfolio'>
			<ul className='portfolio-tabs'>
				<li key='Filter1' onClick={() => handleFilter('*')}>
					All
				</li>
				<li key='Filter2' onClick={() => handleFilter('ui')}>
					UI
				</li>
				<li key='Filter3' onClick={() => handleFilter('code')}>
					Code
				</li>
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
