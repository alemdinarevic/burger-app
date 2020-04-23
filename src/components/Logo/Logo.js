import React from 'react';

import logoBurger from '../../assets/images/logo.png';
import './Logo.css';

const logo = (props) => (
	<div className='Logo'>
      <img src={logoBurger} alt="MyBurger"/>
    </div>
);

export default logo;