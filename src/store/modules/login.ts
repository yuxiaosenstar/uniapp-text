/*
 * @Author: 余畅畅
 * @Date: 2021-04-30 16:43:31
 * @LastEditTime: 2021-04-30 17:07:42
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \my-new-test01\src\store\modules\login.ts
 *
 */
export default {
  state: {
    text: '我是moduleA模块下state.text的值'
  },
  getters: {},
  mutations: {
    showText(state) {
      console.log(state.text)
    }
  },
  actions: {},
  namespaced: true
}
