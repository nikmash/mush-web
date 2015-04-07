require("root.css")
var React = require('react');
var Router = require('react-router');

var Header = require("components/header.jsx")
var Frame = require("components/frame.jsx")


var app = React.createClass({

	render: function() {
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