import createActions from 'util/action'
import Axios from 'axios'

export default createActions({
	getFeed(category) {
		return (dispatch) => {
			Axios.get('me/' + category).then((response) => {
				dispatch({
					category,
					items : response.data.payload,
				})
			})
		}
	}
})