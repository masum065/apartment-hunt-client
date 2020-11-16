import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ApartmentList from '../ApartmentList/ApartmentList';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.scss';

const Home = () => {
	return (
		<div>
			<Header />
			<ApartmentList />
			<Service />
			<Footer />
		</div>
	);
};

export default Home;
