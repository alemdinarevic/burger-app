import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/Navigationitems';

const toolbar = (props) => {
	return (
		<header className='Toolbar'>
			<div>MENU</div>
			<Logo />
			<nav>
				<Navigationitems />
			</nav>
		</header>
	);
}

export default toolbar;