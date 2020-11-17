import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Apartment from './Components/Apartment/Apartment/Apartment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import MyRent from './Components/Dashboard/MyRent/MyRent';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Switch>
					<Route path='/home'>
						<Home />
					</Route>

					<Route path='/apartment/:id'>
						<Apartment />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>

					<PrivateRoute path='/dashboard/booking-list'>
						<BookingList />
					</PrivateRoute>
					<PrivateRoute path='/dashboard/addHouse'>
						<AddHouse />
					</PrivateRoute>
					<PrivateRoute path='/dashboard/my-rent'>
						<MyRent />
					</PrivateRoute>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
