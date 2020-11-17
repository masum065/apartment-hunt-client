import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import MainButton from '../../Shared/MainButton/MainButton';
import Menu from '../../Shared/Menu/Menu';
import SiteLogo from '../../Shared/SiteLog/SiteLogo';
import './Header.scss';

const Header = () => {
	const [logedInUser] = useContext(UserContext);
	const history = useHistory();

	console.log(logedInUser);
	return (
		<Container>
			<Row className='py-4'>
				<Col lg={2}>
					<SiteLogo />
				</Col>
				<Col lg={8}>
					<Menu />
				</Col>
				<Col className='text-right login-btn-area' lg={2}>
					{logedInUser.email ? (
						logedInUser.name ? (
							<span>{logedInUser.name}</span>
						) : (
							<span>{logedInUser.displayName}</span>
						)
					) : (
						<MainButton onClick={() => history.push('/login')}>
							Login
						</MainButton>
					)}

					{logedInUser.email && (
						<span
							className='dashboard-btn'
							onClick={() =>
								history.push('/dashboard/booking-list')
							}
						>
							Dashboard
						</span>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
