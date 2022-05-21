import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import * as Cookies from '@/utils/cookies' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
    // start progress bar
    NProgress.start()

    // determine whether the user has logged in
    const hasToken = Cookies.get('token')
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            const hasPromissionRoutes = store.getters.routes.length
            if (hasPromissionRoutes) {
                next()
            } else {
                try {
                    // get user info
                    await store.dispatch('user/getUserInfo')
                    const routes = await store.dispatch('routes/generateRoutes')
                    router.addRoutes(routes)
                    next({...to, replace: true })
                } catch (error) {
                    console.log('error: ', error);
                    // store.dispatch('user/loginOut')
                    NProgress.done()
                }
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})