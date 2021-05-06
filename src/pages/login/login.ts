/*
 * @Author: 余畅畅
 * @Date: 2021-04-30 13:15:27
 * @LastEditTime: 2021-05-06 10:13:42
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \new-projects\my-new-test01\src\pages\login\login.ts
 *
 */

import { login } from '@/api/login'
import MyNumInput from '@/components/my-input/my-num-input.vue'
import MyPassInput from '@/components/my-input/my-pass-input.vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {
    MyNumInput,
    MyPassInput
  }
})
export default class Login extends Vue {
  phonenumber: string = ''
  password: string = ''

  /**
   * 计算属性
   */
  get isDisabled(): boolean {
    return !(this.phonenumber && this.password)
  }

  /**
   * 登录方法
   */
  login() {
    uni.showLoading({
      title: '登录中...'
    })
    login({
      mobile: this.phonenumber,
      password: this.password
    })
      .then(data => {
        uni.hideLoading()
        uni.setStorageSync('username', data.name)
        uni.setStorageSync('address', data.customer.name)
        // uni.switchTab不能传递参数，所以使用storage传递信息
        uni.switchTab({
          url: `/pages/user/user`
        })
      })
      .catch(err => {
        uni.showToast({
          title: err.message,
          icon: 'none'
        })
      })
  }

  setPhonenumber(val) {
    this.phonenumber = val
  }

  setPassword(val) {
    this.password = val
  }
}
