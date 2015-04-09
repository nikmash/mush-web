require("root.css")
var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');

var Header = require("components/header.jsx")
var Frame = require("components/frame.jsx")
var Login = require("components/login.jsx")
var Auth = require("stores/auth.js");


var app = React.createClass({
	mixins : [Reflux.connect(Auth.store, "auth")],
	render: function() {
		if(this.state.auth.authed == undefined)
			return false;
		if(this.state.auth.authed == false)
			return <Login/>;
		return (
			<section className="root">
				<Header />
				<Frame />
				<section className="main">
					<Router.RouteHandler />
				</section>
			</section>
		)
	}
});

module.exports = app;