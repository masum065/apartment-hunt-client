import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const ApartmentList = () => {
	return (
		<Container className='py-5'>
			<Row className='justify-content-center'>
				<Col lg={5}>
					<SectionTitle />
				</Col>
			</Row>
			<Row>
				<ApartmentCard />
			</Row>
		</Container>
	);
};

export default ApartmentList;
