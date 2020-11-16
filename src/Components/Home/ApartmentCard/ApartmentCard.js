import React from 'react';
import { Col } from 'react-bootstrap';
import './ApartmentCard.scss';
import mapMarker from '../../../images/icons/map-marker-alt.png';
import bed from '../../../images/icons/bed.png';
import bath from '../../../images/icons/bath.png';
import MainButton from '../../Shared/MainButton/MainButton';
import cardCover from '../../../images/apartmet-images/Rectangle396.png';

const ApartmentCard = () => {
	return (
		<Col lg={4}>
			<div className='apartment-card'>
				<div
					style={{ background: `url(${cardCover})` }}
					className='apartment-card-bg'
				></div>
				<div className='apartmet-card-content'>
					<h3>Washington Avenue</h3>
					<div className='short-description'>
						<p>
							<img src={mapMarker} alt='mapmarker icon' />{' '}
							Nasirabad H/S, Chattogram
						</p>
						<p>
							<img src={bed} alt='Bed icon' /> 3 Bedrooms
						</p>
						<p>
							<img src={bath} alt='Bath Icon' />2 Bathroom
						</p>
					</div>
					<div className='pricebox'>
						<p className='price'>$194</p>
						<MainButton>View Details</MainButton>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default ApartmentCard;
