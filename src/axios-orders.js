import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-react-app-000.firebaseio.com/',

});

export default instance;