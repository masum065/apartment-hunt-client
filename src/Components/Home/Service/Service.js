import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import properties from '../../../images/icons/Properties.png';
import financ from '../../../images/icons/Financ.png';
import trust from '../../../images/icons/Trust.png';

const serviceData = [
	{
		title: 'Wide Range of Properties',
		description:
			'With a robust selection of popular properties on hand, as well as leading properties from experts.',
		image: properties,
	},
	{
		title: 'Financing Made Easy',
		description:
			'Our stress-free finance department that can find financial solutions to save you money.',
		image: financ,
	},
	{
		title: 'Trusted by Thousands',
		description:
			'Our stress-free finance department that can find financial solutions to save you money.',
		image: trust,
	},
];
const Service = () => {
	return (
		<Container className='py-5'>
			<Row className='justify-content-center'>
				<Col lg={7}>
					<SectionTitle
						name='House Rent'
						title={`Were an agency tailored to all clients' needs that always delivers`}
					/>
				</Col>
			</Row>
			<Row>
				{serviceData.map((serviceInfo) => (
					<ServiceCard serviceInfo={serviceInfo} />
				))}
			</Row>
		</Container>
	);
};

export default Service;
