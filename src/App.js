import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Container>
				<Row className='justify-content-center'>
					<Col xl={3}>
						<h3>Hello React Test</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
