const routers = [
  {
    name: 'index',
    path: '/',
    component: resolve => {
      require(['./views/index.vue'], resolve);
    }
  },
  {
    name: 'video',
    path: '/video',
    component: resolve => {
      require(['./views/video.vue'], resolve);
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
	}
];
export default routers;