import "root/reset.css"
import "root/root.css"
import React from "react"
import Header from "header"
import Login from "login"
import Auth from 'actions/auth'
import { connect } from 'redux/react'


// This is the root of your application.
// React router will dynamically pass in this.props.children based on the route
@connect((state)=> {
	return state.auth
})
export default class Root {
	componentWillMount() {
		const { dispatch } = this.props
		dispatch(Auth.me())
	}
	render() {
		const { me } = this.props
		if(me === undefined)
			return false
		if (!me)
			return <Login />
		return (
			<section className="root">
				<Header />
				<section className="main">
				{this.props.children}
				</section>
			</section>
		)
	}
}