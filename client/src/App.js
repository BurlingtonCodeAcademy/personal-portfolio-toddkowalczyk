import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import History from './components/history'
import Footer from './components/footer'

function App() {

	return (
		<BrowserRouter>
			<div className="App">
				<Route path="/Home" component={Home} />
				<Route path="/About" component={About} />
				<Route path="/Projects" component={Projects} />
				<Route path="/History" component={History} />
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<div className="navbar">
					<Link to="/Home">Home</Link>
					<Link to="/About">About</Link>
					<Link to="/Projects">Project</Link>
					<Link to="/History">Work History</Link>
				</div>
				<Footer></Footer>
			</div>
		</BrowserRouter>
	)
}

export default App;