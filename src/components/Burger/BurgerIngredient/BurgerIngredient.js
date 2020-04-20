import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.css';

class BurgerIngredient extends Component {
	render() {

		// const mystyle = {
			
		// 		width: '80%',
		// 		height:'8%',
		// 		background: 'red',
		// 		margin: '2% auto',
		// 		borderRadius: '15px'
		// };

		let ingredient = null;
		switch (this.props.type) {
			case ('bread-top'):
				ingredient = (
					<div className='BreadTop'>
						<div className='Seeds1'></div>
						<div className='Seeds2'></div>
					</div>
				);
				break;
			case ('bread-bottom'):
				ingredient = <div className='BreadBottom'></div>
				break;	
			case 'meat':
				ingredient = <div className='Meat'></div>
				break;	
			case 'cheese':
				ingredient = <div className='Cheese'></div>
				break;
			case 'salad':
				ingredient = <div className='Salad'></div>
				break;
			case 'bacon':
				ingredient = <div className='Bacon'></div>
				break;
			default:
				ingredient = null;
		}
		return ingredient;
	}	
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;