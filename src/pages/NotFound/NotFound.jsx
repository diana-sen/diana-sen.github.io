import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='not-found-section'>
			<h2 className='not-found-title'>Page Not Found</h2>
			<h4>
				Looks like you've followed a broken link or entered a URL that doesn't
				exist on this site
			</h4>
			<div>
				<Link to='/' className='back-link'>
					&larr; Back to site
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
