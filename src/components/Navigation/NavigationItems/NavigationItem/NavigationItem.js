import React from 'react';

import './NavigationItem.css';

const navigationItem = (props) => {
	let linkClass;
	if (props.active) {
		linkClass = 'active'
	}
	return (
		<li className='NavigationItem'>
			<a className={linkClass} href={props.link}>{props.children}</a>
		</li>
	);
	
}

export default navigationItem;