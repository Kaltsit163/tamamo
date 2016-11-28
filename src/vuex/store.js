import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import mutations from './mutation.js';
import actions from './actions.js';
import getters from './getters.js';

// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 共享的存放状态
const state = {
  num: 0,
  item: []
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
	state,
	mutations
})