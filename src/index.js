import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<form name='contact' method='post'>
	<input type='text' name='name' />
	<input type='email' name='email' />
	<textarea name='message' />
	<button type='submit'> Send Message </button>
	</form>
	<App />
	</React.StrictMode>,
	document.getElementById('root')
);

