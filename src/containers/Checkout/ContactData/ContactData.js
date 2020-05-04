import React, {Component} from 'react';

import axios from '../../../axios-orders';
import './ContactData.css';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
	state = {
		username: '',
		email: '',
		address: {
			street: '',
			postcode: ''
		},
		loading: false,
	};

	orderHandler = (event) => {
		event.preventDefault();
		this.setState({loading: true});
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			customer: {
				name: 'Alem Dinarevic',
				address: {
					street: 'NN bb',
					zipcode: '71370',
					country: 'Bosnia and Herzegovina'
				},
				email: 'test@gmail.com'
			},
			deliveryMethod: 'fastest'
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
		let form = (
			<form>
					<input type='text' name='name' placeholder='Your Name ...' />
					<input type='email' name='email' placeholder='Your Mail ...' />
					<input type='text' name='street' placeholder='Street' />
					<input type='text' name='postcode' placeholder='Postcode' />
					<Button 
						btnType='Success'
						clicked={this.orderHandler}
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

export default ContactData