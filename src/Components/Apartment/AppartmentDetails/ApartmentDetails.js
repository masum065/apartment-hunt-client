import React, { useEffect, useState } from 'react';
import './ApartmentDetails.scss';
import featureimage from '../../../images/apartmet-images/resort-1.png';
import slide1 from '../../../images/apartmet-images/resort-1.png';
import slide2 from '../../../images/apartmet-images/resort-2.png';
import slide3 from '../../../images/apartmet-images/resort-3.png';
import slide4 from '../../../images/apartmet-images/resort-4.png';
import { useParams } from 'react-router-dom';

const ApartmentDetails = () => {
	const { id } = useParams();

	const [fimage, setfimage] = useState('');
	const [apartmentDetails, setapArtmentDetails] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/book-apartment/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setapArtmentDetails(data);
				setfimage(data.image.img);
			});
	}, [id]);

	console.log(apartmentDetails);
	const fing = `data:image/png;base64,${fimage.img}`;
	return (
		<>
			{apartmentDetails && (
				<div className='apartmet-details'>
					<div className='feature-image'>
						<img src={`data:image/png;base64,${fimage}`} alt='' />
					</div>
					<div className='slide-images'>
						<img src={slide1} alt='' />
						<img src={slide2} alt='' />
						<img src={slide3} alt='' />
						<img src={slide4} alt='' />
					</div>
					<div className='aprtment-body'>
						<div className='apartmet-tite'>
							<h3>{apartmentDetails.title}</h3>
							<p className='price'>${apartmentDetails.price}</p>
						</div>
						<p>
							3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious,
							South facing Apartment for Rent in Rangs Malancha,
							Melbourne.
						</p>

						<h5 className='subtite'>Price Details-</h5>
						<p>
							Rent/Month: $550 (negotiable) Service Charge :
							8,000/= Tk per month, subject to change Security
							Deposit : 3 month’s rent Flat Release Policy : 3
							months earlier notice required
						</p>
						<h5 className='subtite'>Property Details-</h5>
						<p>
							Address & Area : Rangs Malancha, House-68, Road-6A
							(Dead End Road), Dhanmondi Residential Area. Flat
							Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6
							storied Building ) (South Facing Unit) Room Category
							: 3 Large Bed Rooms with 3 Verandas, Spacious
							Drawing, Dining & Family Living Room, Highly
							Decorated Kitchen with Store Room and Servant room
							with attached Toilet. Facilities : 1 Modern Lift,
							All Modern Amenities & Semi Furnished. Additional
							Facilities : a. Electricity with full generator
							load, b. Central Gas Geyser, c. 2 Car Parking with 1
							Driver’s Accommodation, d. Community Conference
							Hall, e. Roof Top Beautified Garden and Grassy
							Ground, f. Cloth Hanging facility with CC camera
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default ApartmentDetails;
