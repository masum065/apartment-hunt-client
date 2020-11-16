import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
	return (
		<div className='main-menu'>
			<Link to='/home'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/service'>Service</Link>
			<Link to='/concerns'>Concerns</Link>
			<Link to='/event'>Event</Link>
			<Link to='/contact'>Contact</Link>
		</div>
	);
};

export default Menu;
