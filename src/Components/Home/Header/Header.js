import React from 'react';
<<<<<<< HEAD
import { Col, Container, Row } from 'react-bootstrap';
import MainButton from '../../Shared/MainButton/MainButton';
import Menu from '../../Shared/Menu/Menu';
import SiteLogo from '../../Shared/SiteLog/SiteLogo';

const Header = () => {
	return (
		<Container>
			<Row className='py-4'>
				<Col lg={2}>
					<SiteLogo />
				</Col>
				<Col lg={8}>
					<Menu />
				</Col>
				<Col className='text-right' lg={2}>
					<MainButton>Login</MainButton>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
=======

const Header = () => {
    return (
        <div>
            <h1>header is here</h1>
        </div>
    );
};

export default Header;
>>>>>>> a3697d6525c5172205c485bb915d59e4b5e38725
