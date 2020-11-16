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