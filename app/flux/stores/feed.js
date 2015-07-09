import * as Actions from "constants/actions"
import createStore from "util/store"

export default createStore({
	inbox : [],
	outbox : [],
}, {

	getFeed(state,action) {
		return {
			...state,
			[action.category] : action.items
		}
	},

});