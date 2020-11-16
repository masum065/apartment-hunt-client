import React from 'react';
import { Col } from 'react-bootstrap';
import './ApartmentCard.scss';
import mapMarker from '../../../images/icons/map-marker-alt.png';
import bed from '../../../images/icons/bed.png';
import bath from '../../../images/icons/bath.png';
import MainButton from '../../Shared/MainButton/MainButton';
import { Link } from 'react-router-dom';

const ApartmentCard = (props) => {
	const {
		name,
		image,
		location,
		bedQuantity,
		bathQuantity,
		price,
		_id,
	} = props.apartmentInfo;
	return (
		<Col lg={4}>
			<div className='apartment-card pt-3'>
				<div
					style={{ background: `url(${image})` }}
					className='apartment-card-bg'
				></div>
				<div className='apartmet-card-content'>
					<h3>{name}</h3>
					<div className='short-description'>
						<p>
							<img src={mapMarker} alt='mapmarker icon' />
							{location}
						</p>
						<p>
							<img src={bed} alt='Bed icon' /> {bedQuantity}{' '}
							Bedrooms
						</p>
						<p>
							<img src={bath} alt='Bath Icon' />
							{bathQuantity} Bathroom
						</p>
					</div>
					<div className='pricebox'>
						<p className='price'>${price}</p>
						<Link to={`/apartment/${_id}`}>
							<MainButton>View Details</MainButton>
						</Link>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default ApartmentCard;
