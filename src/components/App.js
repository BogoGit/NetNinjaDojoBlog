import Home from './Home'
import Create from './Create'
import Navbar from './Navbar'
import BlogDetails from './BlogDetails'
import Error from './Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='app'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
						<Route path='/blogs/:id'>
							<BlogDetails />
						</Route>
						<Route>
							<Error />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
