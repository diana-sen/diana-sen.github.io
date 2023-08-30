import React from 'react';
import PropTypes from 'prop-types';

const PhotoBox = ({ name, title, description, avatar }) => {
	return (
		<figure className='photo-info-container'>
			<img className='image-profile' src={avatar} alt={name} />
			<figcaption className='photo-name'>{name}</figcaption>
			<article>
				{title && (
					<>
						<h2 className='info-title'>{title}</h2>
						<p className='info-description'>{description}</p>
					</>
				)}
			</article>
		</figure>
	);
};

PhotoBox.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	avatar: PropTypes.string,
};

export default PhotoBox;
