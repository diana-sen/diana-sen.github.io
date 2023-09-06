import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import server from './services/server';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './assets/styles/main_style.scss';

server();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
