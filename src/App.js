import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Apartment from './Components/Apartment/Apartment/Apartment';

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
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/apartment/:id'>
						<Apartment />
					</Route>
					<Route path='/login'>
						<Login />
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
