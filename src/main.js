import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import routers from './router';
import Env from './config/env';
import Vuex from 'vuex';
import store from './vuex/store.js';

Vue.use(VueRouter); // 使用vue-router
Vue.use(Vuex); // 使用vuex

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: Env != 'production',
    mode: 'history',
    routes: routers
});

// Vue起飞
export  default new Vue({
		base: __dirname,
		store: store,
    router: router,
    render: h => h(App)
}).$mount('#app');

// 路由切换开始
router.beforeEach( (to, from, next) => {
	document.querySelector('#tamamo-loading').style.display = 'block';
	next();
});

// 路由切换成功
router.afterEach((to, from, next) => {
	document.querySelector('#tamamo-loading').style.display = 'none';
});

// 扩展location.query
location.query = (function(){
	var searchArr = [],query = {};
	try{
		searchArr = window.location.search.substring(1).split('&');
		for(var n in searchArr){
			var o = searchArr[n].split('=');
			if(o[0]!=""){
				query[o[0]] = o[1];
			}
		}
	}catch(e){
		return {};
	}
	return query;
})();