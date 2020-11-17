import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Home/Header/Header';
import ApartmentDetails from '../AppartmentDetails/ApartmentDetails';
import BookingFrom from '../BookingFrom/BookingFrom';
import Bradcumb from '../Bradcumb/Breadcumb';

const Apartment = () => {
	return (
		<>
			<Header />
			<Bradcumb />

			<Container className='my-5'>
				<Row>
					<Col lg={8}>
						<ApartmentDetails />
					</Col>
					<Col lg={4}>
						<BookingFrom />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Apartment;
