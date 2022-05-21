import { constantRoutes, featchRoutes } from '@/router'
import user from '@/api/modules/user'
import Layout from '@/layouts'


//引入所有views下.vue文件
const modules =
    import.meta.glob("../../views/**/**.vue");
/**
 * ! 使用递归过滤异步路由表数据
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes) {
    const res = []
        //! 循环每一个路由
    routes.forEach(route => {
        const tmp = {...route }
        const component = tmp.component
        if (route.component) {
            if (component === 'Layout') {
                tmp.component = Layout
            } else if (component) {
                tmp.component = modules[`../../views${component}.vue`]
            }
        }
        //! 判断是否有下级
        if (tmp.children) {
            tmp.children = filterAsyncRoutes(tmp.children) //! 如果有下级，继续使用递归
        }
        res.push(tmp)
    })
    return res
}

const state = {
    routes: [],
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        //! 把过滤出来有权限的路由添加到不需要权限的路由里面去
        state.routes = routes
    }
}

const actions = {
    generateRoutes({ commit }, payload) {
        return new Promise((resolve, reject) => {
            //! 存的是有权限的路由，是一个数组
            setTimeout(() => {
                const accessedRoutes = filterAsyncRoutes(featchRoutes)
                commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            }, 1000);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}