import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import SectionTitle from '../SectionTitle/SectionTitle';

const ApartmentList = (props) => {
	console.log(props);
	const [apartments, setApartments] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/apartments')
			.then((res) => res.json())
			.then((data) => {
				setApartments(data);
			});
	}, []);

	return (
		<Container className='py-5'>
			<Row className='justify-content-center'>
				<Col lg={5}>
					<SectionTitle
						name='House Rent'
						title='Discover the latest Rent available today'
					/>
				</Col>
			</Row>
			<Row>
				{apartments.map((apartmentInfo) => (
					<ApartmentCard
						key={apartmentInfo._id}
						apartmentInfo={apartmentInfo}
					/>
				))}
			</Row>
		</Container>
	);
};

export default ApartmentList;
