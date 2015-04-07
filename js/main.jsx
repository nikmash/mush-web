require("reset.css");

var React = require("react/addons");
var Router = require("react-router")
var Route = Router.Route;
var Redirect = Router.Redirect;
var axios = require("axios");

axios.interceptors.request.use(function(config) {
	config.url = "http://mush.io/api/" + config.url;
	config.params = config.params || {};
	config.params.session = window.location.hash ? window.location.hash.substring(1) : "90bbde32-fc51-4da5-8475-b2e32503f915";
	return config;
});


var Root = require("components/root.jsx");
var Feed = require("components/feed.jsx")

var routes = (
	<Route name="app" path="/" handler={Root}>
		<Route name="inbox" handler={Feed} />
		<Route name="outbox" handler={Feed} />
		<Route name="saved" handler={Feed} />
		<Redirect from="/" to="/inbox" />
	</Route>
)


React.initializeTouchEvents(true)
Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body)   
})



