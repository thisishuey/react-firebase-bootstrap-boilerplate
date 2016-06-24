import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './containers/App'
import UserPage from './components/AboutPage'
import RepoPage from './components/ContactPage'

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="/todos" />
		<Route path="/todos" component={TodosPage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/contact" component={ContactPage} />
	</Route>
)
