import axios from 'axios' // 引入axios
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router/index'
import * as Cookies from '@/utils/cookies'

const service = axios.create({
        baseURL: import.meta.env.VITE_BASE_API,
        timeout: 30000
    })
    // http request 拦截器
service.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Bearer ' + store.getters.token
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// http response 拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200 && response.data.status === 0) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response.data)
        }
    },
    error => {
        return Promise.reject(error)
    }
)


//! 封装axios的函数
const axiosRequest = (url, method, data, config, headers) => {
    const axiosConfig = { // axios的配置对象
        url,
        method,
        data,
        headers,
    }
    config.err_msg = config.err_msg === undefined ? true : config.err_msg //默认:弹出请求错误信息
    config.success_msg = config.success_msg === undefined ? false : config.success_msg //默认:不弹出请求成功信息
    return new Promise((resolve, reject) => {
        service(axiosConfig).then(res => {
            resolve(res)
            if (config.success_msg && res.message) {
                Message.success(res.message)
            }
        }).catch(err => {
            if (config.err_msg && err.message) {
                Message.error(err.message)
            }
            if (err.status === -2) {
                Cookies.remove('token')
                router.replace('/login')
            }
            reject(err)
        })
    })
}

//! 真正执行的函数
const request = (url, method = 'get', data = {}, config = {}, headers = {}) => {
        return axiosRequest(url, method, data, config, headers)
    }
    // 有人喜欢这样用 兼容一下
request.get = (url, data = {}, config = {}, headers = {}) => {
    return axiosRequest(url, 'get', data, config, headers)
}
request.post = (url, data = {}, config = {}, headers = {}) => {
    return axiosRequest(url, 'post', data, config, headers)
}

export default request