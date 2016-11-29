const mutations = {
	addItem (state, num) {
		state.count ++;
	},
	reduceItem (state, num) {
		state.count --;
	}
}

export default mutations;