import React from 'react';

import {NavLink} from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props) => {
	let linkClass;
	if (props.active) {
		linkClass = 'active'
	}
	return (
		<li className='NavigationItem'>
			<NavLink to={props.link} exact={props.exact}>
				{props.children}
			</NavLink>
		</li>
	);
	
}

export default navigationItem;