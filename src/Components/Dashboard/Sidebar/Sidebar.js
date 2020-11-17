import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { ReactComponent as Drive } from '../../../images/icons/hard-drive.svg';
import { ReactComponent as Plus } from '../../../images/icons/plus.svg';
import { ReactComponent as Home } from '../../../images/icons/home.svg';
const Sidebar = () => {
	return (
		<div className='panel-sidebar'>
			<Link to='/dashboard/booking-list'>
				<p>
					<Drive /> Booking list
				</p>
			</Link>
			<Link to='/dashboard/addHouse'>
				<p>
					<Plus /> Add Rent House
				</p>
			</Link>
			<Link to='/dashboard/my-rent'>
				<p>
					<Home /> My Rent
				</p>
			</Link>
		</div>
	);
};

export default Sidebar;
