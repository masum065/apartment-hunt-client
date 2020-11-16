import React from 'react';
import MainButton from '../../Shared/MainButton/MainButton';
import './SearchBox.scss';

const SearchBox = () => {
	return (
		<div className='SearchBoxStyle'>
			<h1 style={{ marginBottom: '35px' }}>FIND YOUR HOUSE RENT</h1>
			<form className='form-inline mb-3'>
				<input
					type='text'
					className='formStyle mr-2'
					placeholder='Search...'
				/>
				<MainButton>Find Now</MainButton>
			</form>
		</div>
	);
};

export default SearchBox;
