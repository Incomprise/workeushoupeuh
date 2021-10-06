import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Quizz from './components/Quizz';

const App = () => {
	return (
		<Switch>
			<Route exact path="/quizz" component={Quizz} />
		</Switch>
	);
};

export default App;