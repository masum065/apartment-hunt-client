import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import MainButton from '../../Shared/MainButton/MainButton';
import './BookingFrom.scss';

const BookingFrom = () => {
	const { register, handleSubmit, errors, reset } = useForm();
	const { id } = useParams();
	const [submitMessage, setSubmitMessage] = useState(false);
	const [apartmentDetails, setapArtmentDetails] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/book-apartment/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setapArtmentDetails(data);
			});
	}, [id]);

	const onSubmit = (data) => {
		const bookingData = {
			...data,
			title: apartmentDetails.title,
			price: apartmentDetails.price,
			bathroom: apartmentDetails.bathroom,
			location: apartmentDetails.location,
			bedroom: apartmentDetails.bedroom,
			status: 'pending',
		};
		console.log(bookingData);

		fetch('http://localhost:5000/reqBooking', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(bookingData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					reset(true);
					setSubmitMessage(true);
				}
			});
	};
	return (
		<div className='BookingFrom'>
			{submitMessage && (
				<p className='alert alert-success'>
					Booking Request successfully Submitted !!
				</p>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* name filed */}
				<input
					type='text'
					name='name'
					className='BookingFromInputStyle'
					ref={register({ required: true })}
					placeholder='Name'
				/>
				{errors.name && <span className='error'>Name is required</span>}
				{/* phone number filed */}
				<input
					type='number'
					name='phone'
					className='BookingFromInputStyle'
					ref={register({ required: true })}
					placeholder='Phone No'
				/>
				{errors.number && (
					<span className='error'>Phone Number is required</span>
				)}
				{/* Email filed */}
				<input
					type='email'
					name='email'
					className='BookingFromInputStyle'
					ref={register({ required: true })}
					placeholder='Email Address'
				/>
				{errors.email && (
					<span className='error'>Email is required</span>
				)}
				{/* Massage filed */}
				<textarea
					type='massage'
					name='text'
					style={{ height: '155px' }}
					className='BookingFromInputStyle'
					ref={register({ required: true })}
					placeholder='Massage'
				/>
				{errors.text && (
					<span className='error'>Please some text..</span>
				)}
				<div>
					<MainButton>Request Booking</MainButton>
				</div>
			</form>
		</div>
	);
};

export default BookingFrom;
