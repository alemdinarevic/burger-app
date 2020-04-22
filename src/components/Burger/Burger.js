import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	let transormedIngredients = Object.keys(props.ingredients)
	.map(igKey => {
		return [...Array(props.ingredients[igKey])]
		.map((_, i) => {
			return (<BurgerIngredient key={igKey+i} type={igKey}/>);
		})
		.reduce((arr, el) => arr.concat(el), []); 
	});

	if (transormedIngredients.length === 0) {
		transormedIngredients = <p>Please start adding new ingredients...</p>;
	}
	console.log(transormedIngredients);
  return (
  	<div className='Burger'>
	 	  <BurgerIngredient type='bread-top' />
		  {transormedIngredients}
		  <BurgerIngredient type='bread-bottom' />
		</div>   
  );
};

export default burger;