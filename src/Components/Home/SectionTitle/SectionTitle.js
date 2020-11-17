import React from 'react';
import './SectionTitle.scss';
const SectionTitle = ({ name, title }) => {
	return (
		<div className='section-title'>
			<h3>{name}</h3>
			<h2>{title}</h2>
		</div>
	);
};

export default SectionTitle;
