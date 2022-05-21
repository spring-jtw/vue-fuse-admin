import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import './plugins'
import http from '@/utils/request'
Vue.config.productionTip = false
Vue.prototype.$http = http
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")