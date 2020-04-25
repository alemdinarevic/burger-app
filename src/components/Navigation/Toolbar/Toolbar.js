import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/Navigationitems';

const toolbar = (props) => {
	return (
		<header className='Toolbar'>
			<div>MENU</div>
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