import React from 'react';
import { useForm } from 'react-hook-form';
import MainButton from '../Shared/MainButton/MainButton';
import './BookingFrom.scss';

const BookingFrom = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data)
     }
    return (
        <div>
            <div className='BookingFrom'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name filed */}
                    <input type="text" name="name" className="BookingFromInputStyle" ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className="error">Name is required</span>}
                    {/* phone number filed */}
                    <input type="number" name="number" className="BookingFromInputStyle"   ref={register({ required: true })} placeholder="Phone No"/>
                        {errors.number && <span className="error">Phone Number is required</span>}
                    {/* Email filed */}
                    <input type="email" name="email" className="BookingFromInputStyle"   ref={register({ required: true })} placeholder="Email Address"/>
                        {errors.email && <span className="error">Email is required</span>}
                    {/* Massage filed */}
                    <textarea type="massage" name="text" style={{height: "155px"}} className="BookingFromInputStyle"   ref={register({ required: true })} placeholder="Massage"/>
                        {errors.text && <span className="error">Please some text..</span>}
                    <div>
                        <MainButton>Request Booking</MainButton>
                    </div>   
                </form>
            </div>
        </div>
    );
};

export default BookingFrom;