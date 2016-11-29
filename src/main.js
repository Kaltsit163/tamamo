import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import routers from './router';
import App from 'components/app.vue';
import Env from './config/env';
import store from './vuex/store.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter);  // 使用vue-router
Vue.use(ElementUI);  // 使用饿了么UI

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
  history: Env != 'production',
  mode: 'history',
  routes: routers
});

// 路由切换开始
router.beforeEach( (to, from, next) => {
	console.log('start router')
	next();
});

// 路由切换成功
router.afterEach((to, from, next) => {
	console.log('stop router')
});

// Vue配好
export default new Vue({
		store, router, render: h => h(App)
}).$mount('#tamamo-app');

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