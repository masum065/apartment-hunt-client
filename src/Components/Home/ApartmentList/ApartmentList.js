import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';

const ApartmentList = () => {
	return (
		<Container>
			<Row className='justify-content-center'>
				<Col lg={5}>
					<SectionTitle />
				</Col>
			</Row>
		</Container>
	);
};

export default ApartmentList;
