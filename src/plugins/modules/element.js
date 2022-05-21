// ElementUi
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css';

// 一些公共css
import '@/styles/element-variables.scss'

// element-ui-verify 校验插件
import elementUIVerify from 'element-ui-verify'

Vue.use(ElementUI, {
    size: 'small',
})
Vue.use(elementUIVerify, {
    fieldChange: 'clear',
})