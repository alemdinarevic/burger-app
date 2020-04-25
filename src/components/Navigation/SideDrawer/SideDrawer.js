import React from 'react';

import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/Navigationitems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
	let openClose = ['SideDrawer', 'Close'];
	if (props.open) {
		openClose = ['SideDrawer', 'Open'];
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed}/>
		<div className={openClose.join(' ')}>
			<div className='Logoo'>
				<Logo/>
			</div>
			<nav>
				<Navigationitems />
			</nav>
		</div>
		</Aux>
		
	);
}

export default sideDrawer;