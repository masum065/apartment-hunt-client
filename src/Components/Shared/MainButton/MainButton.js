import React from 'react';
import './MainButton.scss';

const MainButton = (props) => {
	return <button className='main-btn'>{props.children}</button>;
};

export default MainButton;
