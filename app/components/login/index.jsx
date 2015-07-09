import 'login/login.css'
import React from 'react';
import Auth from 'actions/auth'
import { connect } from 'redux/react'

@connect(state => {
	return state
})
export default class Login extends React.Component {
	render() {
		return (
			<section className="login">
				<div className="wrap">
					<h1 className="test">Welcome Back!</h1>
					<form>
						<input ref="email" placeholder="email" type="text" />
						<input ref="password" placeholder="password" type="password" />
						<a onClick={this.login}>Login</a>
					</form>
				</div>
			</section>
		)
	}
	login = () => {
		const email = this.refs.email.getDOMNode().value
		const password = this.refs.password.getDOMNode().value
		const { dispatch } = this.props
		dispatch(Auth.login(email, password))
	}
}
