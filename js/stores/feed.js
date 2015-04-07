var Reflux = require("reflux")
var axios = require("axios")

module.exports.actions = Reflux.createActions([
	"inbox"
])

var data = { 
	inbox : [],
	outbox : []
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	onInbox: function() {
		axios.get("me/inbox").then(function(response) {
			this.trigger({
				inbox : response.data
			})
		}.bind(this))
	},
	getInitialState: function() {
		return data
	},
})