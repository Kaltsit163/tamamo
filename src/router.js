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
        name: 'badApple',
        path: '/bad-apple',
        component: resolve => {
            require(['./components/bad-apple.vue'], resolve);
        }
    }
];
export default routers;