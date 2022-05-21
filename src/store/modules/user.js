// import user from '@wms/api/modules/user'
import * as Cookies from '@/utils/cookies'
import api from '@/api'
import { Message } from 'element-ui'
const getDefaultState = () => {
    return {
        token: Cookies.get('token'),
        userInfo: {}
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
        Cookies.set('token', token)
    },
    SET_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo
    },
}

const actions = {
    // 登录
    async login({ commit }, userInfo) {
        const { data } = await api.user.login(userInfo)
        if (data.token) {
            commit('SET_TOKEN', data.token)
            Message.success('登录成功！')
        } else {
            Message.error("登录接口异常！")
        }
    },
    // 请求用户信息数据
    async getUserInfo({ commit }) {
        const { data } = await api.user.getUserInfo()
        if (!data) {
            Message.error('验证失败，请重新登录!')
            Cookies.remove('token')
            return false
        }
        commit('SET_USERINFO', data)
    },
    // 退出
    loginOut() {
        Cookies.remove('token')
        window.location.reload()
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}