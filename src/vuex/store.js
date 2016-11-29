import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import * as actions from '../vuex/actions.js';
import * as getters from '../vuex/mutations.js';
import mutations from '../vuex/mutations.js';

// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 共享的存放状态
const state = {
  count: 0,
  item: []
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})