/* Packages */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { createStore, applyMiddleware, compose } from 'redux';

/* App Router */
import AppRouter from './router.jsx';

/* Redux Reducers */
import Reducers from './_reducers/index.js';

/* Middlewares */
let middlewares = [
    thunkMiddleware
];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}
/* Enhancers */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Redux Store */
const store = createStore(
    Reducers,
    composeEnhancers(
        applyMiddleware(
            ...middlewares
        ),
    ),
);
render(
	<Provider store={store}>
		<AppRouter />
	 </Provider>,
	document.getElementById("root"),
);

