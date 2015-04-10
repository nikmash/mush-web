require("login.css")
var React = require('react');
var Reflux = require('reflux');
var Auth = require("stores/auth.js")
var Avalanche = require("avalanche.js")

var Login = React.createClass({
	login : function() {
		Auth.actions.login(this.refs.email.getDOMNode().value, this.refs.password.getDOMNode().value)
	},
	render: function() {
		var r = (
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
		);
		return r;
	}

});


module.exports = Login;