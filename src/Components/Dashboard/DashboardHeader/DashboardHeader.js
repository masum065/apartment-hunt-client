import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import './DashboardHeader.scss';
import SiteLogo from '../../Shared/SiteLog/SiteLogo';
import { UserContext } from '../../../App';

const DashboardHeader = (props) => {
	const [logedInUser] = useContext(UserContext);
	return (
		<Row className='pt-4 px-3'>
			<Col lg={2}>
				<div className='logo-media'>
					<SiteLogo />
				</div>
			</Col>
			<Col col={6} lg={5}>
				<div>
					<h5>{props.title}</h5>
				</div>
			</Col>
			<Col className='text-right' col={6} lg={5}>
				<h4
					style={{
						fontSize: '18px',
						paddingRight: '25px',
						fontWeight: '600',
					}}
				>
					{logedInUser.email ? (
						logedInUser.name ? (
							<span>{logedInUser.name}</span>
						) : (
							<span>{logedInUser.displayName}</span>
						)
					) : (
						<span>User</span>
					)}
				</h4>
			</Col>
		</Row>
	);
};

export default DashboardHeader;
