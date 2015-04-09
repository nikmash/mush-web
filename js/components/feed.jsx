require("feed.css")
var React = require('react');
var Reflux = require("reflux")
var Img = require("components/image.jsx")

var Feed = require("stores/feed.js")
var Frame = require("stores/frame.js")

var feed = React.createClass({
	mixins : [Reflux.connect(Feed.store, "feed")],
  	contextTypes: {
    	router: React.PropTypes.func
	},
	componentWillMount: function() {
		var route = this.context.router.getCurrentRoutes()[1].name;
		Feed.actions.refresh(route);
	},
	componentWillReceiveProps: function(nextProps) {
		var route = this.context.router.getCurrentRoutes()[1].name;
		Feed.actions.refresh(route);
		
	},
	open : function(feed) {
		if(
			feed.site.name == "YouTube" ||
			feed.link.url.indexOf("gif") > -1 || 
			feed.link.url.indexOf("jpg") > -1 || 
			feed.link.url.indexOf("mp4") > -1) {
			Frame.actions.load(feed)
			return;
		}
		window.open(feed.link.url, "_blank");
	},
	render: function() {
		var route = this.context.router.getCurrentRoutes()[1].name;
		return (
			<section className="feed">
				<ul>
				{
					this.state.feed[route].map(function(feed) {
							console.log(feed)
						return (
							<li onClick={this.open.bind(this, feed)}>
								<summary>
									<h3><strong>{feed.user.name}</strong> shared this</h3>
									<h1>{feed.link.title}</h1>
									<h2>{feed.site.name || feed.site.domain}</h2>
									<ul className="users">
									{
										feed.mentions.map(function(mention) {
											return (
												<li>
													<img src={mention.avatar || "http://www.localcrimenews.com/wp-content/uploads/2013/07/default-user-icon-profile.png"} />
													<summary>
														<h1>{mention.name}</h1>
														<h2>{route == "inbox" ? "Mentioned you" : "Is mentioned"}</h2>
													</summary>
												</li>
											)

										})
									}
									</ul>
								</summary>
								<Img width="200" height="100" src={feed.link.image} />
							</li>
						)
					}.bind(this))
				}
				</ul>
			</section>
		);
	}

});

module.exports = feed;