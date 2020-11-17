import React, { useState } from 'react';
import './AddHouse.scss';
import { Col, Container, Row } from 'react-bootstrap';
import MainButton from '../../Shared/MainButton/MainButton';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { ReactComponent as Cloudcomputing } from '../../../images/icons/cloud-computing.svg';

const AddHouse = () => {
	const [rentHouse, setRentHouse] = useState({});
	const [file, setFile] = useState({});

	const handleBlur = (e) => {
		const newRentHouse = { ...rentHouse };
		newRentHouse[e.target.name] = e.target.value;
		setRentHouse(newRentHouse);
	};

	const handleFileChange = (e) => {
		const newFile = e.target.files[0];
		setFile(newFile);
	};

	const handleSubmit = (e) => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('title', rentHouse.title);
		formData.append('price', rentHouse.price);
		formData.append('location', rentHouse.location);
		formData.append('bedroom', rentHouse.bedroom);
		formData.append('bathroom', rentHouse.bathroom);

		fetch('http://localhost:5000/addhouse', {
			method: 'POST',
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});

		e.preventDefault();
	};

	return (
		<Container fluid>
			<DashboardHeader title='Add Rent House' />

			<Row>
				<Col xl={2}>
					<Sidebar />
				</Col>

				<Col style={{ backgroundColor: '#F4F7FC' }} xl={10}>
					<div className='add-rent-house'>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col lg={6}>
									<div className='form-input'>
										<label htmlFor='title'>
											Apartment Title
										</label>
										<input
											type='text'
											onBlur={handleBlur}
											name='title'
											placeholder='Enter Title'
										/>
									</div>
								</Col>
								<Col lg={6}>
									<div className='form-input'>
										<label htmlFor='price'>Price</label>
										<input
											type='number'
											onBlur={handleBlur}
											name='price'
											placeholder='Enter Price'
										/>
									</div>
								</Col>
								<Col lg={6}>
									<div className='form-input'>
										<label htmlFor='title'>Location</label>
										<input
											type='text'
											onBlur={handleBlur}
											name='location'
											placeholder='Enter Location'
										/>
									</div>
								</Col>
								<Col lg={6}>
									<div className='form-input'>
										<label htmlFor='price'>
											No of Bedroom
										</label>
										<input
											type='number'
											onBlur={handleBlur}
											name='bedroom'
											placeholder='Enter Number'
										/>
									</div>
								</Col>
								<Col lg={6}>
									<div className='form-input'>
										<label htmlFor='price'>
											No of Bathroom
										</label>
										<input
											type='number'
											onBlur={handleBlur}
											name='bathroom'
											placeholder='Enter Number'
										/>
									</div>
								</Col>
								<Col lg={4}>
									<div className='file-field'>
										<p>{file.name}</p>
										<input
											type='file'
											onChange={handleFileChange}
											id='file'
											name='file'
											style={{ display: 'none' }}
										/>
										<label htmlFor='file'>
											<Cloudcomputing
												width='25'
												fill='#009444'
												height='25'
											/>
											<span
												style={{ marginLeft: '10px' }}
											>
												Upload Image
											</span>
										</label>
									</div>
								</Col>
							</Row>
							<MainButton>Submit</MainButton>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default AddHouse;
