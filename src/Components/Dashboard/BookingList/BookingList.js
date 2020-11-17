import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.scss';

const BookingList = () => {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/allBookings')
			.then((response) => response.json())
			.then((data) => setBookings(data));
	}, []);

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
									<th scope='col'>Name</th>
									<th scope='col'>Email ID</th>
									<th scope='col'>Mobile</th>
									<th width='28%' scope='col'>
										Message
									</th>
									<th scope='col'>Status</th>
								</tr>
							</thead>
							<tbody>
								{bookings.map((booking) => (
									<tr>
										<td>{booking.name}</td>
										<td>{booking.email}</td>
										<td>{booking.phone}</td>
										<td>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.
										</td>
										<td>
											<select>
												<option>Pending</option>
												<option>Done</option>
												<option>On Going</option>
											</select>
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

export default BookingList;
