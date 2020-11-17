import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo.png';

const SiteLogo = () => {
	return (
		<Link to='/'>
			<img style={{ maxWidth: '100px' }} src={logo} alt='site-logo' />
		</Link>
	);
};

export default SiteLogo;
