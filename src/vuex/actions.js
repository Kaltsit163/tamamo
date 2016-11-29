export const ADD_COUNT = ({commit}, num) => {
	console.log('触发actions');
  commit('ADD_COUNT', num);
}
export const ADD_ITEM = ({commit}, item) => {
  commit('ADD_ITEM', item);
}