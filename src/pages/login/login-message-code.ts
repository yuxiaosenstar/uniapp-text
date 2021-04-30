/*
 * @Author: 余畅畅
 * @Date: 2021-04-30 14:32:15
 * @LastEditTime: 2021-04-30 14:39:27
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \my-new-test01\src\pages\login\login-message-code.ts
 *
 */

import { Component, Vue } from 'vue-property-decorator'
import { sendCode, checkCode } from '@/api/login'
import valueCode from '@/components/my-input/valid-code.vue'

@Component({
  components: {
    valueCode
  }
})
export default class LoginMessageCode extends Vue {
  phonenumber: string = ''
  count: number = 59

  /**
   * 页面加载后
   * @param option
   */
  public onLoad(option: { phonenumber: string }) {
    this.phonenumber = option.phonenumber
    this.sendCode(option.phonenumber)
  }

  /**
   * 挂载后
   */
  public mounted() {
    // 开启倒计时
    this.minusCount()
  }

  /**
   * 发动验证码
   */
  public sendCode(phonenumber: string = this.phonenumber) {
    uni.showLoading({
      title: '发送中...'
    })
    sendCode({
      mobile: phonenumber
    })
      .then(() => {
        uni.hideLoading()
        uni.showToast({
          title: '发送成功'
        })
      })
      .catch(err => {
        uni.showToast({
          title: err.message,
          icon: 'none'
        })
      })
  }

  /**
   * 倒计时
   */
  public minusCount() {
    let timer = setInterval(() => {
      if (this.count === 0) {
        clearInterval(timer)
      } else {
        this.count -= 1
      }
    }, 1000)
  }

  /**
   * 重新获取验证码
   */
  public recaptureCode() {
    this.sendCode()
    this.count = 59
    this.minusCount()
  }

  /**
   * 通过验证码登录
   */
  public login(code: string) {
    uni.showLoading({
      title: '登录中...'
    })
    checkCode({
      code,
      mobile: this.phonenumber
    })
      .then(res => {
        uni.hideLoading()
        if (res.success) {
          uni.switchTab({
            url: '/pages/user/user'
          })
        } else {
          uni.showLoading({
            title: res.msg
          })
        }
      })
      .catch(err => {
        uni.showToast({
          title: err.message,
          icon: 'none'
        })
      })
  }
}
