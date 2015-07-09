import React from "react"
import {Route, Redirect} from 'react-router';
import Root from "root"
import Feed from 'feed'

export default (
	<Route path='/' component={Root}>
		<Route name='inbox' path='inbox' component={Feed} />
		<Route name='outbox' path="outbox" component={Feed} />
		<Redirect from='' to='inbox' />
	</Route>
)
