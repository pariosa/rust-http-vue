        Vue.use(VueRouter);
        Vue.use(VeeValidate);

        const routes = [{
                path: '/',
                component: spahome
            }, {
                path: '/home2',
                component: spahome2
            }, 
        ]
        const router = new VueRouter({
            routes // short for `routes: routes`
        })
        var app = new Vue({
            el: '#app',
            watch: {},
            data: {
                msg: 'Hello'
            },
            methods: {},
            router
        })