import React from 'react';
import ApartmentList from '../ApartmentList/ApartmentList';
import Header from '../Header/Header';
import './Home.scss';

const Home = () => {
	return (
		<>
			<Header />
			<ApartmentList />
		</>
	);
};

export default Home;
