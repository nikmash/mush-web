require("feed.css")
var React = require('react');
var Reflux = require("reflux")
var Img = require("components/image.jsx")

var Feed = require("stores/feed.js")
var Frame = require("stores/frame.js")

var feed = React.createClass({
	mixins : [Reflux.connect(Feed.store, "feed")],
	componentWillMount: function() {
		Feed.actions.inbox();
	},
	open : function(feed) {
		window.open(feed.link.url, "_blank")
	},
	render: function() {
		return (
			<section className="feed">
				<ul>
				{
					this.state.feed.inbox.map(function(feed) {
						return (
							<li onClick={Frame.actions.load.bind(undefined, feed)}>
								<summary>
									<h3><strong>{feed.user.name}</strong> shared this</h3>
									<h1>{feed.link.title}</h1>
									<h2>{feed.site.name || feed.site.domain}</h2>
									<ul className="users">
										<li>
											<img src={feed.mention.avatar || "http://www.localcrimenews.com/wp-content/uploads/2013/07/default-user-icon-profile.png"} />
											<summary>
												<h1>{feed.mention.name}</h1>
												<h2>Mentioned you</h2>
											</summary>
										</li>
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