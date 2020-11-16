import React from 'react';
import MainButton from '../Shared/MainButton/MainButton';
import './SearchBox.scss'

const SearchBox = () => {
    return (
        <div>
            <div className='SearchBoxStyle'>
                <h1 style={{marginBottom: "35px"}}>FIND YOUR HOUSE RENT</h1>
                <form class="form-inline mb-3">
                    <input type="text" class="formStyle mr-2" placeholder="Search..."/>
                    <MainButton>Find Now</MainButton>
                </form>
            </div>
        </div>
    );
};

export default SearchBox;