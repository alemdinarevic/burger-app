import React, {Component} from 'react';

import axios from '../../../axios-orders';
import './ContactData.css';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'name'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},

			email: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'email'
				},
				value: '',
				validation: {
					required: true
				}, 
				valid: false,
				touched: false
			},

			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'street'
				},
				value: '',
				validation: {
					required: true
				}, 
				valid: false,
				touched: false
			},

			zipcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'zipcode'
				},
				value: '',
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5,
					isNumeric: true
				}, 
				valid: false,
				touched: false
			},

			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'country'
				},
				value: '',
				validation: {
					required: true
				}, 
				valid: false,
				touched: false
			},

			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'fastest', displayedValue: 'Fastest'},
						{value: 'cheapest', displayedValue: 'Cheapest'},
						{value: 'regular', displayedValue: 'Regular'}
					]
				},
				value: '',
				validation: {},
        valid: true
			},
		},
		formIsValid: false,
		loading: false
	};

	checkValidity = (value, rules) => {
		let isValid = true;
		if (!rules) {
				return true;
		}
		
		if (rules.required) {
				isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
				isValid = value.length >= rules.minLength && isValid
		}

		if (rules.maxLength) {
				isValid = value.length <= rules.maxLength && isValid
		}

		if (rules.isEmail) {
				const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
				isValid = pattern.test(value) && isValid
		}

		if (rules.isNumeric) {
				const pattern = /^\d+$/;
				isValid = pattern.test(value) && isValid
		}

		return isValid;
  }

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {...this.state.orderForm};
		const updatedFormElement = {...updatedOrderForm[inputIdentifier]};

		updatedFormElement.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

		let formIsValid = true;
		for (let inputIdentifier in updatedOrderForm) {
				formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
	}

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading: true});

		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
			//form
		};

		axios.post('/orders.json', order)
		.then(response => {
			this.setState({loading: false});
			this.props.history.push('/');
		})
		.catch(error => {
			this.setState({loading: false});
		});

	}

	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}
		let form = (
			<form onSubmit={this.orderHandler}>
					{formElementsArray.map(formElement => 
						<Input 
							key={formElement.id}
							inputype={formElement.config.elementType}
							elementConfig={formElement.config.elementConfig}
							value={formElement.config.value}
							changed={(event) => this.inputChangedHandler(event, formElement.id)}
						/>
					)}
					<Button 
						btnType='Success'
						disabled={!this.state.formIsValid}
					>
						ORDER
					</Button>
				</form>
		);

		if (this.state.loading) {
			form = <Spinner />
		}

		return (
			<div className='ContactData'>
				<h4>Enter your contact data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;