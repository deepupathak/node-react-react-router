import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import {Router, Route, browserHistory, IndexRoute, hashHistory} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import HomePage from './components/homePage';
import SecondPage from './components/secondPage';
// import MainLayout from './components/mainLayout';

// render(<HomePage />, document.getElementById('root'));

/*render(
	<Router history={hashHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={HomePage} />
			<Route path="/second" component={SecondPage} />
		</Route>
	</Router>,
	document.getElementById('root')
);*/

ReactDOM.render((
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/second">Page 2</Link></li>
			</ul>
			<hr />
			<Route exact path="/" component={HomePage} />
			<Route path="/second" component={SecondPage} />
		</div>
	</Router>
), document.getElementById( 'root' ) )