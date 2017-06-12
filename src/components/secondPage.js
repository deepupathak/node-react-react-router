import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/base.scss';
// import { Redirect } from 'react-router';

/*const SecondPage = () => {
	return (
		<div>
			<h1>Second Page</h1>
			<Link to='/'>
				Go to first page
			</Link>
		</div>
	);
};*/

export default class HomePage extends Component {
	/*constructor(props) {
		super(props);

		this.state = {
			redirect : false,
			path: "/"
		};
	}
	componentDidMount(){
		this.setState({redirect: true})
	}
	redirect(e){
		e.preventDefault();
		console.log("redirect >>>>>")
		this.state.redirect ?
			(
				<Redirect to={{ pathname: this.state.path }} />
			)
		: ''
	}*/
	render(){
		return(
			<div>
				<h1>Second Page</h1>
				{/*<button type="button" onClick={this.redirect.bind(this)}>Go to first page</button>*/}
				<Link to='/'>
					<button>Go to first page</button>
				</Link>
			</div>
		)
	}
}