import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import cardCover from '../../../images/apartmet-images/Rectangle396.png';

const apartmentData = [
	{
		name: 'Washington Avenue',
		location: 'Nasirabad H/S, Chattogram',
		image: cardCover,
		bedQuantity: 2,
		bathQuantity: 3,
		price: 194,
		_id: 6546454,
	},
	{
		name: 'Family Apartment Three',
		location: 'Nasirabad H/S, Chattogram',
		image: cardCover,
		bedQuantity: 2,
		bathQuantity: 3,
		price: 594,
		_id: 65464654,
	},
];

const ApartmentList = () => {
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
				{apartmentData.map((apartmentInfo) => (
					<ApartmentCard apartmentInfo={apartmentInfo} />
				))}
			</Row>
		</Container>
	);
};

export default ApartmentList;
