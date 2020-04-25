import React from 'react';

import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/Navigationitems';

const sideDrawer = (props) => {

	return (
		<div className='SideDrawer'>
			<div className='Logoo'>
				<Logo/>
			</div>
			<nav>
				<Navigationitems />
			</nav>

		</div>
	);
}

export default sideDrawer;