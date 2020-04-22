import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
	return (
		<div className='BuildControls'>
			<p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
			{controls.map(el => 
				<BuildControl 
					key={el.label} 
					label={el.label}
					added={() => props.ingredientAdded(el.type)}
					removed={() => props.ingredientsRemoved(el.type)}
					disabled={props.disabled[el.type]}
				/>)}
			<button className='OrderButton' disabled={props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
		</div>
	);

}

export default buildControls;