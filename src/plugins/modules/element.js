// ElementUi
import Vue from 'vue'
import ElementUI from 'element-ui'

// 一些公共css
import '@/styles/rewrite-el-ui.scss'

// element-ui-verify 校验插件
import elementUIVerify from 'element-ui-verify'

Vue.use(ElementUI, {
    size: 'small',
})
Vue.use(elementUIVerify, {
    fieldChange: 'clear',
})