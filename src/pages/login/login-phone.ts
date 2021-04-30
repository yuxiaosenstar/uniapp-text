/*
 * @Author: 余畅畅
 * @Date: 2021-04-30 13:24:47
 * @LastEditTime: 2021-04-30 14:37:58
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \my-new-test01\src\pages\login\login-phone.ts
 *
 */

import { Component, Vue } from 'vue-property-decorator'
import MyNumInput from '@/components/my-input/my-num-input.vue'

@Component({
  components: {
    MyNumInput
  }
})
export default class LoginPhone extends Vue {
  phonenumber = ''

  /**
   * 计算属性
   */
  get isDisabled() {
    return this.phonenumber.length < 11
  }

  setPhonenumber(val) {
    this.phonenumber = val
  }

  /**
   * 跳转到获取验证码页面
   */
  toCode() {
    uni.navigateTo({
      url: `../login/login-message-code?phonenumber=${this.phonenumber}`
    })
  }
}
