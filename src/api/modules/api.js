import request from '@/utils/request'
import { Message } from 'element-ui'

const api = {
    login: data => request.post('/api/admin/login', data),
    getUserInfo: () => request.get('/api/admin/getUserInfo'),
    getAllRoutes: () => request.get('/api/admin/getAllRoutes'),
    editRoute: (id, data) => request.post(`/api/admin/editRoute/${id}`, data, { success_msg: true }),
}
const mock = {
    login: () => {
        return new Promise(resolve => {
            setTimeout(() => { return resolve({ status: 0, data: { token: 123 }, message: '请求成功' }) }, 100);
        })
    },
    getUserInfo: () => {
        return new Promise(resolve => {
            setTimeout(() => { return resolve({ status: 0, data: { token: 123 }, message: '请求成功' }) }, 100);
        })
    },
    getAllRoutes: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                return resolve({
                    status: 0,
                    data: [{
                            id: 1,
                            parent_id: '',
                            path: '/',
                            hidden: 1,
                            component: 'Layout',
                            title: '首页',
                            icon: 'home',
                        },
                        {
                            id: 2,
                            parent_id: 1,
                            path: '/',
                            hidden: 1,
                            component: '/home/index',
                            title: 'home',
                            icon: 'el-icon-s-home'
                        },
                        {
                            id: 3,
                            parent_id: 1,
                            path: '/tab-page',
                            hidden: 1,
                            component: '/tab-page/index',
                            title: 'vue-router-tab',
                            icon: 'el-icon-takeaway-box'
                        },
                        {
                            id: 4,
                            parent_id: 1,
                            path: '/tab-details',
                            hidden: 2,
                            component: '/tab-page/details',
                            title: '编辑商品',
                            key: 'fullpath',
                            active_menu: '/tab-page'
                        },
                        {
                            id: 5,
                            parent_id: 1,
                            path: '/element-ui-verify',
                            hidden: 1,
                            component: '/element-ui-verify/index',
                            title: 'element-ui-校验',
                            icon: 'el-icon-finished'
                        },
                        {
                            id: 6,
                            parent_id: 1,
                            path: '/umy-ui',
                            hidden: 1,
                            component: '/umy-ui/index',
                            title: '虚拟表格umy-ui',
                            icon: 'el-icon-s-grid'
                        },
                        {
                            id: 7,
                            parent_id: 1,
                            path: '/textbus',
                            hidden: 1,
                            component: '/textbus/index',
                            title: '富文本TextBus',
                            icon: 'el-icon-edit-outline'
                        },
                        {
                            id: 8,
                            parent_id: 1,
                            path: '/form-generator',
                            hidden: 1,
                            component: '/form-generator/index',
                            title: '低代码',
                            icon: 'el-icon-magic-stick'
                        },
                        {
                            id: 9,
                            parent_id: '',
                            path: '/',
                            hidden: 1,
                            component: 'Layout',
                            title: '权限管理',
                            icon: 'el-icon-setting'
                        },
                        {
                            id: 10,
                            parent_id: 9,
                            path: '/router-manage',
                            hidden: 1,
                            component: '/router/index',
                            title: '路由管理',
                            icon: 'el-icon-guide'
                        },
                        {
                            id: 11,
                            parent_id: 9,
                            path: '/user-manage',
                            hidden: 1,
                            component: '/user/index',
                            title: '用户管理',
                            icon: 'el-icon-user-solid'
                        },
                        {
                            id: 12,
                            parent_id: 9,
                            path: '/role-manage',
                            hidden: 1,
                            component: '/role/index',
                            title: '角色管理',
                            icon: 'el-icon-s-custom'
                        },
                    ],
                    message: '请求成功'
                })
            }, 300);
        })
    },
    editRoute: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                Message.success('编辑成功')
                return resolve({ status: 0, data: { token: 123 }, message: '编辑成功' })
            }, 1000);
        })
    },
}

export default process.env.NODE_ENV === 'development' ? mock : api