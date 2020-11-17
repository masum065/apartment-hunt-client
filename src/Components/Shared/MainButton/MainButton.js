import React from 'react';
import './MainButton.scss';

const MainButton = (props) => {
	return (
		<button onClick={props.onClick} className='main-btn'>
			{props.children}
		</button>
	);
};

export default MainButton;
