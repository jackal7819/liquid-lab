import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ToastContainer position='top-left' autoClose={5000} />
		<App />
	</React.StrictMode>
);
