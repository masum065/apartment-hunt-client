import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import MainButton from '../../Shared/MainButton/MainButton';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './MyRent.scss';

const MyRent = () => {
	const [logedInUser] = useContext(UserContext);
	const [rents, setRents] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/bookingList', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ email: logedInUser.email }),
		})
			.then((res) => res.json())
			.then((data) => setRents(data));
	}, [logedInUser]);

	return (
		<Container fluid>
			<DashboardHeader title='All Bookings' />

			<Row>
				<Col xl={2}>
					<Sidebar />
				</Col>
				<Col
					style={{ backgroundColor: '#F4F7FC', height: '85vh' }}
					xl={10}
				>
					<div className='booking-table'>
						<table>
							<thead>
								<tr>
									<th scope='col'>House</th>
									<th width='40%' scope='col'>
										Price
									</th>
									<th width='15%' scope='col'>
										Actoin
									</th>
								</tr>
							</thead>
							<tbody>
								{rents.map((rent) => (
									<tr key={rent._id}>
										<td>{rent.name}</td>
										<td>${rent.price}</td>
										<td>
											<MainButton>
												View Details
											</MainButton>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default MyRent;
