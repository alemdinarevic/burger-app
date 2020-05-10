import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

class BurgerBuilder extends Component {

	state = {
		purchasing: false,
		loading: false,
		error: false
	}

	componentDidMount() {
		axios.get('/ingredients.json')
		.then(response => {
			this.setState({ingredients: response.data})
		})
		.catch (error => {
			this.setState({error: true})
		});
	}

	

	updatePurchased (ingredients) {
		const sum = Object.keys(ingredients).map(igKey => ingredients[igKey])
		.reduce((sum, el) => sum+el, 0);
		console.log(sum);
		return sum > 0;
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = () => {
		const queryParams = [];
		for (let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		queryParams.push('price=' + this.state.totalPrice);
		const queryString = queryParams.join('&');
		
		console.log(this.state.ingredients);
		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		});
	}

  render() {

		const disabledInfo = {
			...this.props.ings
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.state.error ? <p>Ingredients can't be loaded...</p> : <Spinner />;

			if (this.props.ings !== null) {
				burger = (
					<Aux>
						<Burger ingredients={this.props.ings} />
						<BuildControls 
							ingredientAdded={this.props.onIngredientAdded} 
							ingredientsRemoved={this.props.onIngredientRemoved} 
							disabled={disabledInfo}
							price={this.props.price}
							purchaseable={this.updatePurchased(this.props.ings)}
							ordered={this.purchaseHandler}
						/>
					</Aux>
				);

				orderSummary = (
					<OrderSummary 
						ingredients={this.props.ings} 
						purchaseCanceled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						totalPrice={this.props.price}
					/>
				);
			}

			if (this.state.loading === true) {
				orderSummary = <Spinner />;
			}	

		
			
    return (
	    <Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
  }
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients,
		price: state.totalPrice
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
		onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));