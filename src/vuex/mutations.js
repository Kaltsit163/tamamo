const mutations = {
	ADD_COUNT : (state, num) => {
		console.log('触发mutations');
		state.count ++;
	},
	ADD_ITEM : (state, item) => {
		state.item.push(item);
	}
}

export default mutations;