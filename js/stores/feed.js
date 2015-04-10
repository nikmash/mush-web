var Reflux = require("reflux")
var axios = require("axios")

module.exports.actions = Reflux.createActions([
	"refresh",
])

var data = { 
	inbox : [],
	saved : [],
	outbox : []
};

module.exports.store = Reflux.createStore({
	listenables : [module.exports.actions],
	onRefresh : function(seg) {
		axios.get("me/" + seg).then(function(response) {
			data[seg] = response.data;
			this.trigger(data);
		}.bind(this))

	},
	getInitialState: function() {
		return data
	},
})