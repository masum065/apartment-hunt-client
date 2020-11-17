import React from 'react';
import { Col } from 'react-bootstrap';
import './ServiceCard.scss';

const ServiceCard = ({ serviceInfo }) => {
	const { title, description, image } = serviceInfo;
	return (
		<Col lg={4}>
			<div className='service-card text-center pt-3'>
				<div className='card-image'>
					<img src={image} alt='' />
				</div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</Col>
	);
};

export default ServiceCard;
