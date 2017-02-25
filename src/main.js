/*! Sammon by Tamamo */

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import routers from './router';
import axios from 'axios';
import App from 'view/app.vue';
import Env from './config/env';
import store from './vuex/store.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import FastClick from 'fastclick';
import iconFont from 'libs/iconfont.js';
import flexbile from 'libs/flexible.js';
import flexbile_css from 'libs/flexible_css.js';

// 移动端使用的fastclick
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// 全局使用
window.axios = axios;
// 使用 Vue-router
Vue.use(VueRouter);
// 使用饿了么UI
Vue.use(ElementUI);

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
	next();
});

// 路由切换成功
router.afterEach((to, from, next) => {});

// Vue初始化
export default new Vue({
		store,
		router,
		render: h => h(App)
}).$mount('#tamamo-app');