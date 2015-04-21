require("reset.css");

var React = require("react/addons");
var Router = require("react-router")
var Route = Router.Route;
var Redirect = Router.Redirect;


var Root = require("components/root.jsx");
var Feed = require("components/feed.jsx")

var routes = (
	<Route name="app" path="/" handler={Root}>
		<Route name="inbox" handler={Feed} />
		<Route name="outbox" handler={Feed} />
		<Route name="saved" handler={Feed} />
		<Route name="search" handler={Feed} />
		<Redirect from="/" to="/inbox" />
	</Route>
)


React.initializeTouchEvents(true)
Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body)   
})



