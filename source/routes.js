import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TodosPage from './containers/TodosPage';


const routes = (
	<Route path="/" component={App}>
		<IndexRedirect to="/todos" />
		<Route path="/todos" component={TodosPage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/contact" component={ContactPage} />
	</Route>
);

export default routes;
