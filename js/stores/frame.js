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