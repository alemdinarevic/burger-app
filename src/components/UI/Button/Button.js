import React from 'react';

import './Button.css';

const button = (props) => {
	let buttonClass = ['Button', props.btnType].join(' '); // join class Button and props.btnType
	//console.log(buttonClass);
	return (
		<button 
			className={buttonClass}
			onClick={props.clicked}>
			{props.children}
		</button>
	);
}

export default button;