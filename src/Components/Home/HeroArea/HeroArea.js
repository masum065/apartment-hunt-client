import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './Heroarea.scss';
import heroBg from '../../../images/apartmet-images/Rectangle-13.jpg';

const HeroArea = () => {
	return (
		<div
			style={{ backgroundImage: `url(${heroBg})` }}
			className='HeroAreaStyle'
		>
			<SearchBox />
		</div>
	);
};

export default HeroArea;
