import React from 'react';
import PropTypes from 'prop-types';

import '../assets/stylesheets/base.scss';

import { Link } from 'react-router-dom';


const HomePage = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<Link to='/second'>
				Go to second page
			</Link>
		</div>
	);
};

/*App.propTypes = {
  name: PropTypes.string,
};*/

export default HomePage;