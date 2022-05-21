import request from '@/utils/request'

export default {
    // login: data => request.post('/api/admin/login', data),
    // getUserInfo: () => request.get('/api/admin/getUserInfo'),
    login: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                return resolve({
                    status: 0,
                    data: {
                        token: 123
                    },
                    message: '请求成功'
                })
            }, 100);
        })
    },
    getUserInfo: () => {
        return new Promise(resolve => {
            setTimeout(() => {
                return resolve({
                    status: 0,
                    data: {
                        token: 123
                    },
                    message: '请求成功'
                })
            }, 100);
        })
    },
}