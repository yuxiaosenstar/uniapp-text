import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import login from './modules/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    appId: '',
    tenant: ''
  },
  getters: {},
  mutations: {
    setAppId(state, data: string) {
      state.appId = data
    },
    setTenant(state, data: string) {
      state.tenant = data
    }
  },
  actions: {
    setAppId(context: { commit: Commit }, data: any) {
      context.commit('setAppId', data)
    },
    setTenant(context: { commit: Commit }, data: any) {
      context.commit('setTenant', data)
    }
  },
  modules: {
    login
  }
})

export default store
