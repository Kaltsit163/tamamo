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
    }
];
export default routers;