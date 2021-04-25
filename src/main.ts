import Vue from 'vue'
import App from './App.vue'
import initToast from '@/components/hd-toast/init.js'
import initLoading from '@/components/hd-loading/init.js'
import store from '@/store'

store.commit('setTenant', 'lhtest')
store.commit('setAppId', 'LhGroupBuyApp')

initToast(Vue)
initLoading(Vue)

Vue.config.productionTip = false

new App().$mount()
