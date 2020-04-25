import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/Navigationitems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
	return (
		<header className='Toolbar'>
			<DrawerToggle clicked={props.drawerToggleClicked}/>
			<div className='Logo'>
				<Logo  />
			</div>
			<nav className='DesktopOnly'>
				<Navigationitems />
			</nav>
		</header>
	);
}

export default toolbar;