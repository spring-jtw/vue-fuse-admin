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
    component: () =>
        import ("@/views/login/index.vue")
}]

//后台请求返回的路由
// meta中key字段为vue-router-tab的路由模式
export const featchRoutes = [{
    path: '/',
    component: 'Layout',
    meta: { title: '首页', icon: 'home' },
    children: [{
            path: '/',
            component: '/home/index',
            meta: { title: 'home', icon: 'el-icon-s-home' },
        },
        {
            path: '/tab-page',
            component: '/tab-page/index',
            meta: { title: 'vue-router-tab', icon: 'el-icon-takeaway-box' }
        },
        {
            path: '/tab-details',
            hidden: true,
            component: '/tab-page/details',
            meta: { title: '编辑商品', key: 'fullpath', active_menu: '/tab-page' }
        },
        {
            path: '/element-ui-verify',
            component: '/element-ui-verify/index',
            meta: { title: 'element-ui-校验', icon: 'el-icon-finished' }
        },
        {
            path: '/umy-ui',
            component: '/umy-ui/index',
            meta: { title: '虚拟表格umy-ui', icon: 'el-icon-s-grid' }
        },
        {
            path: '/textbus',
            component: '/textbus/index',
            meta: { title: '富文本TextBus', icon: 'el-icon-edit-outline' }
        },
        {
            path: '/form-generator',
            component: '/form-generator/index',
            meta: { title: '低代码', icon: 'el-icon-magic-stick' }
        }
    ]
}, {
    path: '/',
    component: 'Layout',
    meta: { title: '权限管理', icon: 'el-icon-setting' },
    children: [{
        path: '/router-manage',
        component: '/router/index',
        meta: { title: '路由管理', icon: 'el-icon-guide' },
    }, {
        path: '/user-manage',
        component: '/user/index',
        meta: { title: '用户管理', icon: 'el-icon-user-solid' },
    }, {
        path: '/role-manage',
        component: '/role/index',
        meta: { title: '角色管理', icon: 'el-icon-s-custom' },
    }]
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