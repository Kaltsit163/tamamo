const mutation = {
	ADD_NUM (state, amount) {
		console.log('ADD_NUM');
		state.count = state.count + amount;
	},
	ADD_ITEM: (state, item) => {
		state.item.push(item);
	}
};
export default mutation;