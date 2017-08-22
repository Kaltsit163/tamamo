/*! Sammon by Tamamo */

const routers = [{
		name: 'index',
		path: '/',
		component: resolve => {
			require(['./views/index.vue'], resolve);
		}
	},
	{
		name: 'video-list',
		path: '/video-list',
		component: resolve => {
			require(['./views/video-list.vue'], resolve);
		}
	},
	{
		name: 'cos',
		path: '/cos',
		component: resolve => {
			require(['./views/cos.vue'], resolve);
		}
	},
	{
		name: 'center',
		path: '/center',
		component: resolve => {
			require(['./views/center.vue'], resolve);
		}
	},
	{
		name: 'scroll',
		path: '/scroll',
		component: resolve => {
			require(['./views/scroll.vue'], resolve);
		}
	},
	{
		name: 'upload',
		path: '/upload',
		component: resolve => {
			require(['./views/upload.vue'], resolve);
		}
	}
];
export default routers;