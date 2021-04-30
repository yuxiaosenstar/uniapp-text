/* eslint-disable no-array-constructor */
/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import Vuex from 'vuex'
import { Commit } from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    appId: '',
    tenant: '',
    phonenumber: '',
    password: ''
  },
  mutations: {
    setAppId(state, data: string) {
      state.appId = data
    },
    setTenant(state, data: string) {
      state.tenant = data
    },
    setPhoneNumber(state, data: string) {
      state.phonenumber = data
    },
    setPassword(state, data: string) {
      state.password = data
    }
  },
  getters: {},
  actions: {
    setAppId(context: { commit: Commit }, data: any) {
      context.commit('setAppId', data)
    },
    setTenant(context: { commit: Commit }, data: any) {
      context.commit('setTenant', data)
    },
    setPhoneNumber(context: { commit: Commit }, data: any) {
      context.commit('setPhoneNumber', data)
    },
    setPassword(context: { commit: Commit }, data: any) {
      context.commit('setPassword', data)
    }
  }
})

export default store
