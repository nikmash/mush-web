var Reflux = require("reflux")

module.exports.actions = Reflux.createActions([
	"load",
	"close"
])

var data = { 
	url : ""
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	onLoad : function(feed) {
		if(
			feed.site.name == "YouTube" ||
			feed.site.domain == "play.google.com" ||
			feed.site.name == "The Verge" || 
			feed.site.name == "GitHub") {
			window.open(feed.link.url, "_blank")
			return;
		}
		this.trigger({
			url : feed.link.url
		})
	},
	onClose : function() {
		console.log("CLOSING")
		this.trigger({
			url : ""
		})
	},
	getInitialState: function() {
		return data
	},
})