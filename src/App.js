import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Contact from './pages/contact'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
	render () {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={Contact} />
				</div>
			</Router>
		)
	}
}

export default App;
