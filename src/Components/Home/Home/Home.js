import React from 'react';
import ApartmentList from '../ApartmentList/ApartmentList';
import Header from '../Header/Header';
import './Home.scss';

const Home = () => {
	return (
		<div>
			<Header />
			<ApartmentList />
		</div>
	);
};

export default Home;
