import Vue from 'vue'
import App from './App.vue'
import initToast from '@/components/hd-toast/init.js'
import initLoading from '@/components/hd-loading/init.js'
import store from '@/store'

Vue.prototype.$store = store

store.commit('setTenant', 'lhtest')
store.commit('setAppId', 'LhGroupBuyApp')

initToast(Vue)
initLoading(Vue)

const app = new Vue({
  store,
  ...App
})

app.$mount()
