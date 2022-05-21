import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location)
}

Vue.use(Router);

//不需要权限验证的路由，所有的角色都可以访问
export const constantRoutes = [{
    path: '/login',
    name: 'Login',
    component: () =>
        import ("@/views/Login/index.vue")
}]

//后台请求返回的路由
// meta中key字段为vue-router-tab的路由模式
export const featchRoutes = [{
    path: '/',
    component: 'Layout',
    meta: { title: '首页', icon: 'home' },
    children: [{
            path: '/',
            name: 'Home',
            component: '/home/index',
            meta: { title: 'home', icon: 'rt-icon-doc' },
        },
        {
            path: '/tab-page',
            meta: { title: 'vue-router-tab' },
            component: '/tab-page/index',
        },
        {
            path: '/tab-details',
            meta: { title: '编辑商品', key: 'fullpath', activeMenu: '/tab-page' },
            hidden: true,
            component: '/tab-page/details',
        },
        {
            path: '/element-ui-verify',
            meta: { title: 'element-ui-校验' },
            component: '/element-ui-verify/index',
        },
        {
            path: '/umy-ui',
            meta: { title: '虚拟表格umy-ui' },
            component: '/umy-ui-table/index',
        },
        {
            path: '/textbus',
            meta: { title: '富文本TextBus' },
            component: '/textbus/index',
        },
        {
            path: '/form-generator',
            meta: { title: '低代码' },
            component: '/form-generator/index',
        }
    ]
}, {
    path: '*',
    redirect: "/"
}]


const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})


const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}


export default router;