import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Quizz from './components/Quizz';
import Home from './pages/Home';


const App = () => {
	return (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route exact path="/quizz" component={Quizz}/>
	</Switch>
	);
	
};

export default App;