import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/base.scss';


const SecondPage = () => {
	return (
		<div>
			<h1>Second Page</h1>
			<Link to='/'>
				Go to first page
			</Link>
		</div>
	);
};

/*App.propTypes = {
  name: PropTypes.string,
};*/

export default SecondPage;