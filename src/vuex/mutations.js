const mutations = {
	ADD_COUNT : (state, num) => {
		state.count += num;
	},
	ADD_ITEM : (state, item) => {
		state.item.push(item);
	}
}

export default mutations;