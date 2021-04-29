<template>
  <view class="container">
    <hd-toast />
    <view class="title">
      <text>输入验证码</text>
    </view>
    <view class="phone-number">
      <text v-cloak>验证码已发送至 +86 {{ phonenumber }}</text>
    </view>
    <valueCode @finish="login" />
    <view class="count-down">
      <text v-show="count > 0" v-cloak>{{ count }} 秒后重新获取验证码</text>
      <text v-show="count === 0" class="recapture" @click="recaptureCode">重新获取验证码</text>
    </view>
  </view>
</template>

<script>
import { sendCode, checkCode } from '@/api/login'
import valueCode from './valid-code'
export default {
  components: {
    valueCode
  },
  data() {
    return {
      phonenumber: '',
      count: 59
    }
  },
  onLoad(option) {
    this.phonenumber = option.phonenumber
    this.sendCode(option.phonenumber)
  },
  mounted() {
    // 开启倒计时
    this.minusCount()
  },
  methods: {
    /**
     * 发动验证码
     */
    sendCode(phonenumber = this.phonenumber) {
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
    },
    /**
     * 倒计时
     */
    minusCount() {
      let timer = setInterval(() => {
        if (this.count === 0) {
          clearInterval(timer)
        } else {
          this.count -= 1
        }
      }, 1000)
    },
    /**
     * 重新获取验证码
     */
    recaptureCode() {
      this.sendCode()
      this.count = 59
      this.minusCount()
    },
    /**
     * 通过验证码登录
     */
    login(code) {
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
            title: err.msg,
            icon: 'none'
          })
        })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 32rpx 80rpx;

  .title {
    margin-top: 99rpx;
    font-size: 48rpx;
    font-weight: 500;
    color: #333;
  }

  .phone-number {
    margin-top: 16rpx;
    font-size: 28rpx;
    color: #333;
    margin-bottom: 24rpx;
  }

  .count-down {
    color: #65686f;
    font-size: 28rpx;
    margin-top: 93rpx;

    .recapture {
      color: #fdc548;
    }
  }
}
</style>
