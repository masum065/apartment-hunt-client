import React from 'react';
import { Container } from 'react-bootstrap';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
	return (
		<Container fluid>
			<DashboardHeader title='Order List' />
			<Sidebar />
		</Container>
	);
};

export default Dashboard;
